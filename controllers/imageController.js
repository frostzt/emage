// Core modules
const sharp = require("sharp");
const multer = require("multer");
const sizeOf = require("image-size");
const { nanoid } = require("nanoid");

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
exports.manipulateImage = async (req, res, next) => {
  try {
    if (!req.files.image) return next();

    const { format, quality } = req.body; // Format and quality of the image to be the output
    let { width, height } = req.body; // Get the height and width of the image only if specified by the user

    // Get the dimensions of the image and set if provided default
    if (width === "default" || height === "default") {
      const dimensions = sizeOf(req.files.image[0].buffer);
      width = width === "default" ? dimensions.width : width;
      height = height === "default" ? dimensions.height : height;
    }

    // Create the image name
    req.body.image = `${nanoid(12)}.${format}`;

    // Create the image and save it as jpeg or png
    if (format == "jpeg" || format == "jpg") {
      await sharp(req.files.image[0].buffer)
        .resize(+width, +height)
        .toFormat("jpeg")
        .jpeg({ quality: +quality })
        .toFile(`./public/images/${req.body.image}`);
    }
    if (format == "png") {
      await sharp(req.files.image[0].buffer)
        .resize(+width, +height)
        .toFormat("png")
        .png({ quality: +quality })
        .toFile(`./public/images/${req.body.image}`);
    }

    return res.status(200).json({
      status: "success",
      // link: `${req.protocol + "://" + req.hostname}/images/${req.body.image}`,
      link: "https://google.com",
    });
  } catch (error) {
    return new CreateError(
      "There was some error in processing the image, please try again!",
      500
    );
  }
};
