import * as actionTypes from "../constants/productConstants";

export const getProductsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCTS_REQUEST:
            return {
                loading: true,
                products: [],
            };
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload,
            };
        case actionTypes.GET_PRODUCTS_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export const searchProductsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_PRODUCTS_REQUEST:
            return {
                loading: true,
                products: [],
            };
        case actionTypes.SEARCH_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload,
            };
        case actionTypes.SEARCH_PRODUCTS_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export const getProductDetailsReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
            return {
                loading: true,
            };
        case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
            return {
                loading: false,
                product: action.payload,
            };
        case actionTypes.GET_PRODUCT_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        case actionTypes.GET_PRODUCT_DETAILS_RESET:
            return {
                product: {},
            };
        default:
            return state;
    }
};

export const postProductReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case actionTypes.POST_PRODUCTS_REQUEST:
            return {
                loading: true,
            };
        case actionTypes.POST_PRODUCTS_SUCCESS:
            return {
                loading: false,
                product: action.payload,
            };
        case actionTypes.POST_PRODUCTS_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export const updateProductReducer = (state = { product: "" }, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_PRODUCT_REQUEST:
            return {
                loading: true,
                product: "",
            };
        case actionTypes.UPDATE_PRODUCT_SUCCESS:
            return {
                loading: false,
                product: action.payload,
            };
        case actionTypes.UPDATE_PRODUCT_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export const deleteProductReducer = (state = { product: "" }, action) => {
    switch (action.type) {
        case actionTypes.DELETE_PRODUCT_REQUEST:
            return {
                loading: true,
                product: "",
            };
        case actionTypes.DELETE_PRODUCT_SUCCESS:
            return {
                loading: false,
                product: action.payload,
            };
        case actionTypes.DELETE_PRODUCT_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};