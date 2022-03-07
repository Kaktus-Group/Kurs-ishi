import { combineReducers } from "redux";
import newsReducer from "./newReducer";

const rootReducer = combineReducers({
  news: newsReducer,
});

export default rootReducer;