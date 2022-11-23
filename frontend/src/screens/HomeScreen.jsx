import "./HomeScreen.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

//Components
import Product from "../components/Product";

//Actions
import { getProducts as listProducts } from "../redux/actions/productActions";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const [searchField, setSearchField] = useState("");

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const productDetails = products.filter((product) => {
    return product.name.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };
  return (
    <div className="homescreen">
      <h2 className="homescreen__title">Latest Product</h2>
      <input
        className="homescreen__input"
        type="search"
        placeholder="Search product"
        onChange={handleChange}
      />
      <div className="homescreen__products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          productDetails.map((product) => (
            <Product
              key={product._id}
              productId={product._id}
              name={product.name}
              price={product.price}
              description={product.description}
              imageUrl={product.imageUrl}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
