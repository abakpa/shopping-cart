const multer = require("multer");

const Multer = (req, res, next) => {
    const storage = multer.diskStorage({
        destination: function(req, file, callback) {
            callback(null, "backend/puplic/uploads/images");
        },
        filename: function(req, file, callback) {
            callback(null, Date.now() + file.originalname.replace(" ", ""));
        },
    });

    const upload = multer({
        storage: storage,
    });
    upload.single("imageUrl");

    next();
};

module.exports = Multer.upload;