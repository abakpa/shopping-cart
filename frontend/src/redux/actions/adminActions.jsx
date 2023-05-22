import * as actionTypes from "../constants/adminConstant";
import axios from "axios";

export const loginUser = (postData) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.POST_LOGIN_REQUEST });

    const { data } = await axios.post(
      "http://localhost:5000/api/login",
      postData
    );

    dispatch({
      type: actionTypes.POST_LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.POST_LOGIN_FAIL,
      payload: error,
    });
  }
};
