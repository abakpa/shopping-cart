import * as actionTypes from "../constants/userConstant";

export const postUserReducer = (state = { user: "" }, action) => {
  switch (action.type) {
    case actionTypes.POST_USER_REQUEST:
      return {
        loading: true,
        user: "",
      };
    case actionTypes.POST_USER_SUCCESS:
      return {
        loading: false,
        user: action.payload,
      };
    case actionTypes.POST_USER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getAllUserReducer = (state = { user: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_ALLUSER_REQUEST:
      return {
        loading: true,
        user: [],
      };
    case actionTypes.GET_ALLUSER_SUCCESS:
      return {
        loading: false,
        user: action.payload,
      };
    case actionTypes.GET_ALLUSER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getUserReducer = (state = { user: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_REQUEST:
      return {
        loading: true,
        user: [],
      };
    case actionTypes.GET_USER_SUCCESS:
      return {
        loading: false,
        user: action.payload,
      };
    case actionTypes.GET_USER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const updateUserReducer = (state = { user: "" }, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_USER_REQUEST:
      return {
        loading: true,
        user: "",
      };
    case actionTypes.UPDATE_USER_SUCCESS:
      return {
        loading: false,
        user: action.payload,
      };
    case actionTypes.UPDATE_USER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const deleteUserReducer = (state = { user: "" }, action) => {
  switch (action.type) {
    case actionTypes.DELETE_USER_REQUEST:
      return {
        loading: true,
        user: "",
      };
    case actionTypes.DELETE_USER_SUCCESS:
      return {
        loading: false,
        user: action.payload,
      };
    case actionTypes.DELETE_USER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
