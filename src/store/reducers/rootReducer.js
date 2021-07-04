import { combineReducers } from "redux";

import moviesReducer from "./moviesReducer";
import shopsReducer from "./shopsReducer";

const rootReducer = combineReducers({
  shops: shopsReducer,
  movies: moviesReducer
});

export default rootReducer;
