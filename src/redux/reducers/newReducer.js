import {
  SET_CATEGORY,
  SET_ERROR,
  SET_KORZINKA,
  SET_DATA,
  REMOVE_KORZINKA,
  INC_KORZINKA,
  DEC_KORZINKA,
  SET_USERS,
  ALERT,
} from "../types";
import DataProducts from "./DataProducts";
const initialState = {
  product: DataProducts,
  korzinka: [],
  alert:false,
  user: {
    name: "",
    phone: "",
  },
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALERT:
  
      return {...state,alert:action.payload}
    case REMOVE_KORZINKA:
      const korzinka = [...state.korzinka];
      korzinka.splice(action.payload, 1);
      return { ...state, korzinka: [...korzinka] };
    case INC_KORZINKA:
      const inc = [...state.korzinka];
      inc[action.payload].count += 1;
      return { ...state, korzinka: [...inc] };
    case DEC_KORZINKA:
      const dec = [...state.korzinka];
      const dec1 = dec[action.payload].count;
      if (dec1 === 1) dec[action.payload].count = 1;
      else dec[action.payload].count -= 1;
      return { ...state, korzinka: [...dec] };
    case SET_KORZINKA:
      return { ...state, korzinka: [...state.korzinka, action.payload] };
    case SET_USERS:
      return { ...state, user: action.payload };

    default:
      return state;
  }
};

export default newsReducer;
