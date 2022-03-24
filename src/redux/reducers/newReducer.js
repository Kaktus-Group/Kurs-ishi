import { SET_CATEGORY, SET_ERROR, SET_KORZINKA,SET_DATA, REMOVE_KORZINKA } from "../types";
import DataProducts from "./DataProducts"
const initialState = {
  news: DataProducts,
  korzinka: [],
  user:[],
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return { ...state, loading: action.payload };
    case REMOVE_KORZINKA:
      console.log(action.payload)
      const korzinka = [...state.korzinka]
      korzinka.splice(action.payload,1)
      return { ...state,korzinka:[...korzinka] };
    case SET_KORZINKA:
      return { ...state, korzinka:[...state.korzinka, action.payload] };

    default:
      return state;
  }
};

export default newsReducer;