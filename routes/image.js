const express = require("express");

const imageController = require("../controllers/imageController");

const router = express.Router();

// Transform Image and upload it
router.post("/image", imageController.uploadImage, imageController.resizeImage);

module.exports = router;
