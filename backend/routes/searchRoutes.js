const express = require("express");
const router = express.Router();
const multer = require("multer");
const auth = require("../middleware/authentication");

const { searchProduct } = require("../controller/productController");

//@desc SEARCH for product
router.get("/:search", searchProduct);

module.exports = router;
