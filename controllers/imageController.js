// Core modules
const multer = require("multer");
const sharp = require("sharp");

const CreateError = require("../utils/CreateError");

// Setup multer and file uploads
const multerStorage = multer.memoryStorage();

// Filter image-type
const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new CreateError("The file provided is not an image!", 400), false);
  }
};

// Multer upload config
const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

// Upload the image as a buffer to the multer memory storage
exports.uploadImage = upload.fields([{ name: "image", maxCount: 1 }]);

// Resize the images and save the buffer
exports.resizeImage = (req, res, next) => {
  try {
    if (!req.files.image) return next();
    const { format, quality } = req.body;
  } catch (error) {}
  return res.send("Works");
};
