import {createStore, compose, applyMiddleware} from "redux"


import thunk from "redux-thunk";

import { fetchProducts } from "../actions/moviesActions";
import { fetchShops } from "../actions/shopsActions";

import rootReducer from "./rootReducer";

///
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


// const store = createStore(
//   reducer,
//   window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION()
// );

const store = createStore(
  rootReducer, // reducer function
  composeEnhancers(applyMiddleware(thunk))
);

store.dispatch(fetchProducts());
store.dispatch(fetchShops());

export default store;
