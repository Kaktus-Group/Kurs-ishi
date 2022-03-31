import { dispatch } from "../store";
import {  REMOVE_KORZINKA, SET_KORZINKA, INC_KORZINKA, DEC_KORZINKA, SET_USERS, ALERT,  } from "../types";


export const setKorzinka = (korzinka) => {
  dispatch({ type: SET_KORZINKA, payload: korzinka });
};

export const setUsers = (phone) => {
  dispatch({ type: SET_USERS, payload: phone });
};

export const setAlert = (phone) => {
  dispatch({ type: ALERT, payload: phone });
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