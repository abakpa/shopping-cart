import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../components/viewAllProduct.css";

import { getProducts } from "../redux/actions/productActions";

export const ViewAllProduct = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.getProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div className="update__product">
      <h2>All Product</h2>

      {loading ? (
        <h2>Loading...</h2>
      ) : (
        products.map((product) => (
          <div key={product._id}>
            <div>
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="product__name">{product.name}</div>
            <div className="product__description">{product.description}</div>
            <div className="product__price">Price: ${product.price}</div>
            <div className="product__countInStock">
              Qty: {product.countInStock}
            </div>
            <div className="update__delete">
              <Link to={`/updateproduct/${product._id}`}>
                <p className="update__button">Update</p>
              </Link>
              <Link to={`/deleteproduct/${product._id}`}>
                <p className="delete__button">Delete</p>
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ViewAllProduct;
