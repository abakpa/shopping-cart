import * as actionTypes from "../constants/userConstant";
import axios from "axios";

export const registerUser = (postData) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.POST_USER_REQUEST });

    const { data } = await axios.post(
      "http://localhost:5000/api/users",
      postData
    );

    dispatch({
      type: actionTypes.POST_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.POST_USER_FAIL,
      payload: error,
    });
  }
};

export const getAllUser = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_ALLUSER_REQUEST });

    const { data } = await axios.get("http://localhost:5000/api/users");

    dispatch({
      type: actionTypes.GET_ALLUSER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_ALLUSER_FAIL,
      payload: error,
    });
  }
};

export const getUser = (userId) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_USER_REQUEST });

    const { data } = await axios.get(
      `http://localhost:5000/api/users/${userId}`
    );

    dispatch({
      type: actionTypes.GET_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_USER_FAIL,
      payload: error,
    });
  }
};

export const updateUser = (id, postData) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.UPDATE_USER_REQUEST });

    const { data } = await axios.patch(
      `http://localhost:5000/api/users/${id}`,
      postData
    );

    dispatch({
      type: actionTypes.UPDATE_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.UPDATE_USER_FAIL,
      payload: error,
    });
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.DELETE_USER_REQUEST });

    const { data } = await axios.put(
      `http://localhost:5000/api/users/delete/${id}`
    );

    dispatch({
      type: actionTypes.DELETE_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.DELETE_USER_FAIL,
      payload: error,
    });
  }
};
