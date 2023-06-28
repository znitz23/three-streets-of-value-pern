const router = require('express').Router();
const express = require("express");
const usersRouter = express.Router();
const jwt = require('jsonwebtoken');
const { createUser, getUserByUsername, getUser } = require('../db/users');
const { requireUser } = require('./utilities');

usersRouter.get('/me', requireUser, async (req, res, next) => {
    try {
        const {username} = req.user;
        const user = await getUserByUsername(username);
      res.send(user);
    } catch (error) {
      console.error(error)
    }
  });


  usersRouter.post('/register', async (req,res,next) => {
    const {username, firstName, lastName, password} = req.body;
    try {
        const _user = await getUserByUsername(username);
        if (_user) {
            next({
                error:"Error",
                name: "UserExistsError",
                message: `User ${username} is already taken.`
            });
        }

        if (password.length < 5) {
            next({
                error: "Error",
                name: "Password Too Short!",
                message: "Password Too Short!"
            });
        }    

        const newUser = await createUser({username, firstName, lastName, password})

        const token = jwt.sign({
            username: newUser.username,
            password: newUser.password
        }, process.env.JWT_SECRET, {
            expiresIn: "2w"
        })

        res.send({
            username: newUser.username,
            message: "thank you for registering",
            token: token
        })
    } catch (error) {
        console.error(error)
    }
  })

  usersRouter.post('/login', async (req,res,next) => {
    const {username, password} = req.body;
    if (!username || !password) {
        next({
            error: "Error",  
            name: "MissingCredentialsError",
            message: "Please supply both a username and password"
        });
    }
    try {    
        const user = await getUser(username, password);
        
        const token = jwt.sign({
            username: user.username,
            password: user.password
        }, process.env.JWT_SECRET, {
            expiresIn: "2w"
        })

        res.send({
                username: user.username,
                message: "you're logged in!",
                token
            });
    } catch (error) {
        console.error(error)
    }
  })

  module.exports = usersRouter