const express = require("express");
const cors = require("cors");
const path = require("path");
const client = require("./db/client");
require("dotenv").config();
client.connect();
const app = express();
const morgan = require("morgan");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "../client", "dist")));

app.use("/api", require("./api"));

app.use("*", (req, res, next) => {
  try {
    res.sendFile(path.join(__dirname, "../client", "dist", "index.html"));
  } catch (error) {
    console.errror(error);
    throw error;
  }
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).send(err.message);
});

module.exports = { app };
