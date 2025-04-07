const multer = require("multer");

// File Storage Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {  
    cb(null, Date.now() + "-" + file.originalname);
  }
});

// File Type Filter
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "application/pdf" || file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only PDFs and images are allowed!"), false);
  }
};

const upload = multer({ storage, fileFilter });

module.exports = upload;