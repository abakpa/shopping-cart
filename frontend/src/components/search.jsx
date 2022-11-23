import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchProducts } from "../redux/actions/productActions";

const Search = () => {
  const [search, setSearch] = useState();

  const dispatch = useDispatch();

  const searchProduct = (e) => {
    e.preventDefault();
    dispatch(searchProducts(search));
  };
  return (
    <div>
      <form onSubmit={searchProduct}>
        <label>Search</label>
        <input value={search} onChange={(e) => setSearch(e.target.value)} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
