const client = require("../db/client");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
const { getUserByUsername } = require("../db/users");

const router = require("express").Router();

router.use(async (req, res, next) => {
  const prefix = "Bearer ";
  const auth = req.header("Authorization");
  if (!auth) {
    next();
  } else if (auth.startsWith(prefix)) {
    const token = auth.slice(prefix.length);

    const { username } = jwt.verify(token, JWT_SECRET);
    if (username) {
      req.user = await getUserByUsername(username);
      next();
    }
  } else {
    next({ message: "Authorization error" });
  }
});

router.get("/health", async (req, res, next) => {
  try {
    const uptime = process.uptime();

    const {
      rows: [dbConnection],
    } = await client.query(`SELECT NOW();`);

    const currentTime = new Date();

    const lastRestart = new Intl.DateTimeFormat("en", {
      timestyle: "long",
      dateStyle: "long",
      timeZone: "America/New_York",
    }).format(currentTime - uptime * 1000);

    res.send({
      message: "The api is healthy!",
      uptime,
      dbConnection,
      currentTime,
      lastRestart,
    });
  } catch (error) {
    next(error);
  }
});

const sessionsRouter = require("./sessions");
router.use("/sessions", sessionsRouter);

const usersRouter = require("./users");
router.use("/users", usersRouter);

router.use((req, res, next) => {
  try {
    res.status(404).send("Sorry, can't find that! :/");
  } catch (error) {
    console.errror(error);
    throw error;
  }
});

(module.exports = router), sessionsRouter, usersRouter;
