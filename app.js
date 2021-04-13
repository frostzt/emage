// Core modules
const cors = require("cors");
const sharp = require("sharp");
const morgan = require("morgan");
const xss = require("xss-clean");
const helmet = require("helmet");
const express = require("express");
const compression = require("compression");

// Create the express instance
const app = express();

// Implement CORS
app.use(cors());

// Implement security headers
app.use(helmet());
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'", "https:", "http:", "data:", "ws:"],
      baseUri: ["'self'"],
      fontSrc: ["'self'", "https:", "http:", "data:"],
      scriptSrc: ["'self'", "https:", "http:", "blob:"],
      styleSrc: ["'self'", "unsafe-inline", "https:", "http:"],
    },
  })
);

// Data sanitization and compression
app.use(xss());
app.use(compression());

// Morgan logging if on dev env
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Routes

// Body parser
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

module.exports = app;
