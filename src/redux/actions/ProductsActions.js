import { dispatch } from "../store";
import { SET_CATEGORY, SET_DATA, REMOVE_KORZINKA, SET_KORZINKA, INC_KORZINKA, DEC_KORZINKA,  } from "../types";


export const setKorzinka = (korzinka) => {
  dispatch({ type: SET_KORZINKA, payload: korzinka });
};

export const removeKorzinka = (index) => {
  dispatch({ type:REMOVE_KORZINKA, payload: index });
};

export const IncKorzinka = (index) => {
  dispatch({ type:INC_KORZINKA, payload: index });
};

export const decKorzinka = (index) => {
  dispatch({ type:DEC_KORZINKA, payload: index });
};