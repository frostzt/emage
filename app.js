const express = require("express");
const morgan = require("morgan");
const sharp = require("sharp");

// Create the express instance
const app = express();

// Morgan logging if on dev env
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Body parser
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

module.exports = app;
