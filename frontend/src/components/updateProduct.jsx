import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getProductDetails } from "../redux/actions/productActions";
import { updateProduct } from "../redux/actions/productActions";

const UpdateProduct = () => {
  const dispatch = useDispatch();
  const { product, loading } = useSelector((state) => state.getProductDetails);
  const user = useSelector((state) => state.postAdmin);

  const productId = useParams();

  const [imageUrl, setImageUrl] = useState("");
  //   const [imageNewUrl, setImageNewUrl] = useState("");
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [countInStock, setCountInStock] = useState();
  console.log(productId.productId);

  useEffect(() => {
    dispatch(getProductDetails(productId.productId));
  }, [dispatch, productId.productId]);

  useEffect(() => {
    if (product) {
      setImageUrl(product.imageUrl);
      setName(product.name);
      setDescription(product.description);
      setPrice(product.price);
      setCountInStock(product.countInStock);
    }
  }, [product]);

  //   const handleChange = (e) => {
  //     setImageNewUrl(
  //       imageNewUrl !== "" ? "/uploads/images/" + e.target.files[0] : imageUrl
  //     );
  //   };

  const updateProductAction = (e) => {
    e.preventDefault();
    const token = user.user.data.token;
    console.log(token);
    const updatedProduct = {
      imageUrl,
      name,
      description,
      price,
      countInStock,
    };
    dispatch(updateProduct(productId.productId, updatedProduct, token));
  };
  return (
    <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <h2>Update Product</h2>
          <form onSubmit={updateProductAction}>
            <div>
              <img src={imageUrl} alt={product.name} />
              <input
                type="file"
                name="imageUrl"
                id="imageUrl"
                onChange={(e) => setImageUrl(e.target.files[0])}
              />
            </div>
            <div>
              <input value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div>
              <input value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div>
              <input
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
              />
            </div>
            <button>Update Product</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UpdateProduct;
