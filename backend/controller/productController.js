const Product = require("../models/Product");
const fs = require("fs");
const path = require("path");

const getAllProducts = async(req, res) => {
    try {
        const products = await Product.find({});

        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
};

const searchProduct = async(req, res) => {
    try {
        console.log(req.params.search);
        const product = await Product.find({
            $or: [{ name: { $regex: req.params.search } }],
        });

        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
};

const getProductById = async(req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
};
const postProduct = async(req, res) => {
    try {
        const file = req.file.filename;
        // console.log(file, req.body);
        const product = await Product.create({
            ...req.body,
            imageUrl: "/uploads/images/" + file,
        });
        // console.log(product);
        res.json(product);
    } catch (error) {
        res.send(error);
    }
};

const updateProduct = async(req, res) => {
    // const file = req.file.filename;
    // const imageUrl = { imageUrl: "/uploads/images" + file };

    const {
        body: { name, description, price, countInStock },
        params: { id: productId },
    } = req;
    let data = req.body;
    if (req.file) {
        data = {
            ...req.body,
            imageUrl: "/uploads/images/" + req.file.filename,
        };
    }
    const product = await Product.findByIdAndUpdate(productId, data, {
        new: true,
        runValidators: true,
    });
    if (!product) {
        res.send("product does not exist");
    }
    res.json(product);
};

const deleteProduct = async(req, res) => {
    const delproduct = req.params.id;

    const product = await Product.findByIdAndRemove(delproduct);

    if (!product) {
        res.send("Product does not exist");
    }
    res.send("Product have been deleted successfully...");
};

module.exports = {
    getAllProducts,
    searchProduct,
    getProductById,
    postProduct,
    updateProduct,
    deleteProduct,
};