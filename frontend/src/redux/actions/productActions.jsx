import * as actionTypes from "../constants/productConstants";
import axios from "axios";

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST });

    const { data } = await axios.get("http://localhost:5000/api/products");

    dispatch({
      type: actionTypes.GET_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const searchProducts = (searchProduct) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.SEARCH_PRODUCTS_REQUEST });

    const { data } = await axios.get(
      `http://localhost:5000/api/search/${searchProduct}`
    );

    dispatch({
      type: actionTypes.SEARCH_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.SEARCH_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(
      `http://localhost:5000/api/products/${id}`
    );

    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteProduct = (id, token) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.DELETE_PRODUCT_REQUEST });

    const { data } = await axios.delete(
      `http://localhost:5000/api/products/${id}`,
      {
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    dispatch({
      type: actionTypes.DELETE_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.DELETE_PRODUCT_FAIL,
      payload: error,
    });
  }
};

export const registerProduct = (postProduct, token) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.POST_PRODUCTS_REQUEST });

    const { data } = await axios.post(
      "http://localhost:5000/api/products",
      postProduct,
      {
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    dispatch({
      type: actionTypes.POST_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.POST_PRODUCTS_FAIL,
      payload: error,
    });
  }
};

export const updateProduct = (id, postData, token) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.UPDATE_PRODUCT_REQUEST });

    const { data } = await axios.patch(
      `http://localhost:5000/api/products/${id}`,
      postData,
      {
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    dispatch({
      type: actionTypes.UPDATE_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.UPDATE_PRODUCT_FAIL,
      payload: error,
    });
  }
};
