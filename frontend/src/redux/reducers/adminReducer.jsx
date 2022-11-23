import * as actionTypes from "../constants/adminConstant";

export const postAdminReducer = (state = { user: "" }, action) => {
  switch (action.type) {
    case actionTypes.POST_LOGIN_REQUEST:
      return {
        loading: true,
        user: "",
      };
    case actionTypes.POST_LOGIN_SUCCESS:
      return {
        loading: false,
        user: action.payload,
      };
    case actionTypes.POST_LOGIN_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
