const express = require("express");
const router = express.Router();
const multer = require("multer");
const auth = require("../middleware/authentication");

const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, "backend/public/uploads/images");
    },
    filename: function(req, file, callback) {
        callback(null, Date.now() + file.originalname);
    },
});

const upload = multer({
    storage: storage,
});

const {
    getAllProducts,
    getProductById,
    postProduct,
    updateProduct,
    deleteProduct,
} = require("../controller/productController");

//@desc GET products from db
//@route GET /api/products
//@access public
router.get("/", getAllProducts);

//@desc GET a product by id from db
//@route GET /api/products/:id
//@access public
router.get("/:id", getProductById);

//@desc POST a product
router.post("/", auth, upload.single("imageUrl"), postProduct);

//@desc UPDATE a product
router.patch("/:id", auth, upload.single("imageUrl"), updateProduct);

//@desc DELETE a product
router.delete("/:id", auth, deleteProduct);
module.exports = router;