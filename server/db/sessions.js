const client = require("./client");

async function createSession({
  date,
  game,
  day,
  buy_in,
  cash_out,
  wl,
  notes,
  username,
  duration,
}) {
  try {
    const {
      rows: [session],
    } = await client.query(
      `
        INSERT INTO sessions(date, game, day, buy_in, cash_out, wl, notes, username, duration)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
        RETURNING *;
        `,
      [date, game, day, buy_in, cash_out, wl, notes, username, duration]
    );
    return session;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

const getAllSessions = async () => {
  try {
    const { rows } = await client.query(`
        SELECT *
        FROM sessions;
        `);
    return rows;
  } catch (error) {
    throw error;
  }
};

const getSessionsByUsername = async (username) => {
  try {
    const { rows } = await client.query(
      `
    SELECT *
    FROM sessions
    WHERE username=$1;
    `,
      [username]
    );
    return rows;
  } catch (error) {
    throw error;
  }
};

const deleteSession = async (sessinoId) => {
  try {
    const {
      rows: [session],
    } = await client.query(
      `
        DELETE from sessions
        WHERE id = $1;
        `,
      [sessinoId]
    );
    return session;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllSessions,
  createSession,
  getSessionsByUsername,
  deleteSession,
};
