const express = require("express");

const imageController = require("../controllers/imageController");

const router = express.Router();

// Transform Image and upload it
router.route("/image").get(imageController.getRoute);

module.exports = router;
