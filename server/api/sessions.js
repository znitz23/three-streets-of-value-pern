const router = require("express").Router();
const express = require("express");
const sessionsRouter = express.Router();
const {
  getAllSessions,
  createSession,
  getSessionsByUsername,
  deleteSession,
} = require("../db/sessions");
const { requireUser } = require("./utilities");

sessionsRouter.get("/", async (req, res, next) => {
  try {
    res.send("Hit the sessions api!");
  } catch (error) {
    throw error;
  }
});

sessionsRouter.get("/all", requireUser, async (req, res, next) => {
  try {
    const sessions = await getAllSessions();
    res.send(sessions);
  } catch (error) {
    next(error);
  }
});

sessionsRouter.get("/all/:username", requireUser, async (req, res, next) => {
  const { username } = req.params;
  try {
    const sessions = await getSessionsByUsername(username);
    res.send(sessions);
  } catch (error) {
    next(error);
  }
});

sessionsRouter.post("/create", requireUser, async (req, res, next) => {
  const { date, game, day, buy_in, cash_out, wl, notes, username, duration } =
    req.body;
  try {
    const newSession = await createSession({
      date,
      game,
      day,
      buy_in,
      cash_out,
      wl,
      notes,
      username,
      duration,
    });
    res.send(newSession);
  } catch (error) {
    next(error);
  }
});

sessionsRouter.delete("/:id/delete", requireUser, async (req, res, next) => {
  const sessionId = req.params.id;
  try {
    const deletedSession = await deleteSession(sessionId);
    res.send({ message: "Session Deleted", deletedSession });
  } catch (error) {
    next(error);
  }
});

module.exports = sessionsRouter;
