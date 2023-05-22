require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const searchRoutes = require("./routes/searchRoutes");
const loginRoutes = require("./routes/loginRoutes");
const cors = require("cors");
const path = require("path");
const { createProxyMiddleware } = require("http-proxy-middleware");

connectDB();
const app = express();

app.use(
  "/uploads/images",
  express.static(path.join(__dirname, "/public/uploads/images/"))
);

app.use(express.json());
app.use(cors());

console.log(path.join(__dirname, "/public/uploads/images"));

app.use("/api/products", productRoutes);
app.use("/api/search", searchRoutes);
app.use("/api/users", userRoutes);
// app.use("/api/users/delete", userRoutes);
app.use("/api/login", loginRoutes);
// app.use(
//     "/api",
//     createProxyMiddleware({
//         target: "http://localhost:3000",
//         changeOrigin: true,
//     })
// );

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(path.join(__dirname, "/public/uploads/images"));
  console.log(`server is running on port ${PORT}`);
});
