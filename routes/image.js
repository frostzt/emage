const express = require("express");

const imageController = require("../controllers/imageController");

const router = express.Router();

router.route("/image").get(imageController.getRoute);

module.exports = router;
