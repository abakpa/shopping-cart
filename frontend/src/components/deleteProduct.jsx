import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getProductDetails } from "../redux/actions/productActions";
import { deleteProduct } from "../redux/actions/productActions";

const DeleteProduct = () => {
  const dispatch = useDispatch();
  const { product, loading } = useSelector((state) => state.getProductDetails);
  const user = useSelector((state) => state.postAdmin);

  const productId = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProductDetails(productId.productId));
  }, [dispatch, productId.productId]);

  const deleteProductAction = (e) => {
    e.preventDefault();
    const token = user.user.data.token;

    dispatch(deleteProduct(productId.productId, token));
    navigate("/viewallproduct");
  };
  return (
    <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <h2>Are sure you want to delete product?</h2>
          <form onSubmit={deleteProductAction}>
            <div>
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <div>{product.name}</div>
            <div>{product.description}</div>
            <div>{product.price}</div>
            <div>{product.countInStock}</div>
            <button type="submit">Delete Product</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default DeleteProduct;
