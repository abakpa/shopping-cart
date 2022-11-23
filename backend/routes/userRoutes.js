const express = require("express");
const router = express.Router();

const {
    createUser,
    getAllUser,
    getUser,
    deleteUser,
    updateUser,
} = require("../controller/userController");

router.post("/", createUser);
router.get("/", getAllUser);
router.get("/:id", getUser);
router.put("/delete/:id", deleteUser);
router.patch("/:id", updateUser);

module.exports = router;