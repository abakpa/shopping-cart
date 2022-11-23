import "./registerProduct.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// import { loginUser } from "../redux/actions/adminActions";
import { registerProduct } from "../redux/actions/productActions";

const RegisterProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const user = useSelector((state) => state.postAdmin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const registerProducts = (e) => {
    e.preventDefault();
    const token = user.user.data.token;
    const postProduct = {
      name,
      description,
      price,
      countInStock,
      imageUrl,
    };
    console.log(postProduct);
    dispatch(registerProduct(postProduct, token));

    navigate("/viewallproduct");
  };
  return (
    <form onSubmit={registerProducts}>
      <div className="register__product">
        {/* {user.user.data.token} */}
        <h2>Register Product</h2>

        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label>Price</label>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <label>Quantity</label>
        <input
          type="text"
          value={countInStock}
          onChange={(e) => setCountInStock(e.target.value)}
        />

        <label>Image</label>
        <input
          type="file"
          alt={name}
          name="imageUrl"
          id="imageUrl"
          onChange={(e) => setImageUrl(e.target.files[0])}
        />
        {/* <img src={file} /> */}
        <button type="submit">Register Product</button>
      </div>
    </form>
  );
};

export default RegisterProduct;
