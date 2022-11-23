import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

//Reducers
import { cartReducer } from "./reducers/cartReducers";
import {
  getProductDetailsReducer,
  searchProductsReducer,
  getProductsReducer,
  postProductReducer,
  deleteProductReducer,
  updateProductReducer,
} from "./reducers/productReducers";
import { postAdminReducer } from "./reducers/adminReducer";
import {
  postUserReducer,
  getAllUserReducer,
  getUserReducer,
  updateUserReducer,
  deleteUserReducer,
} from "./reducers/userReducer";
const reducer = combineReducers({
  cart: cartReducer,
  getProducts: getProductsReducer,
  searchProduct: searchProductsReducer,
  getProductDetails: getProductDetailsReducer,
  postProduct: postProductReducer,
  updateProduct: updateProductReducer,
  deleteProduct: deleteProductReducer,
  postAdmin: postAdminReducer,
  postUser: postUserReducer,
  getAllUser: getAllUserReducer,
  getUser: getUserReducer,
  updateUser: updateUserReducer,
  deleteUser: deleteUserReducer,
});

const middleware = [thunk];

const cartFromLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const INITIAL_STATE = {
  cart: {
    cartItems: cartFromLocalStorage,
  },
};

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
