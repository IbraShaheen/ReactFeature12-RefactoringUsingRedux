import { ADD_SHOP, FETCH_SHOPS } from "../actions/types";


const initialState = {
  shops: [],
  loading:true,
};

const shopsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SHOP:
      return {
        ...state,
        shops: [...state.shops, action.payload.shop],
      };

    case FETCH_SHOPS:
      return {
        ...state,
        shops: action.payload,
        loading:false,
      };

    default:
      return state;
  }
};


export default shopsReducer;