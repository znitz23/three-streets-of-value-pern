const client = require('./client')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = process.env;

const SALT_COUNT = 10;

async function getUserById (id) {
    try {
        const {rows: [user]} = await client.query(`
        SELECT * 
        FROM users
        WHERE user_id = $1
        `, [id])
        return user
    } catch (error) {
       console.error(error) 
    }
}

async function getUserByUsername (username) {
    try {
        const {rows: [user]} = await client.query(`
        SELECT * 
        FROM users
        WHERE username = $1
        `, [username])
        return user
    } catch (error) {
       console.error(error) 
    }
}

async function getUser(username, password) {
    try {
      const user = await getUserByUsername(username);
      const hashedPassword = user.password;
      const isValid = await bcrypt.compare(password, hashedPassword);
      delete user.password;
      if (isValid) return user
      } catch (error) {
      throw error
    }
  }

async function createUser (user) {
    const {password} = user;
    const {username} = user;
    const hashedPassword = await bcrypt.hash(password, SALT_COUNT);

    try {
        const {rows: [newUser] } = await client.query(`
        INSERT INTO users(username, password)
        values ($1, $2)
        ON CONFLICT (username) DO NOTHING
        RETURNING *;
        `, [username, hashedPassword])
        return newUser
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    getUserById, 
    getUserByUsername,
    createUser, 
    getUser
};