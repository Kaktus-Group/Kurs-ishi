import { dispatch } from "../store";
import { SET_CATEGORY, SET_ERROR, SET_LOADING,  } from "../types";

export const setLoading = (state) => {
  dispatch({ type: SET_LOADING, payload: state });
};

export const setError = (state) => {
  dispatch({ type: SET_ERROR, payload: state });
};


export const setCategory = (category) => {
  dispatch({ type: SET_CATEGORY, payload: category });
};