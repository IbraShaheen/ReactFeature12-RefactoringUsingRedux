import axios from "axios";

export const ADD_PRODUCT = "ADD_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const FETCH_PRODUCTS = "FETCH_PRODUCTS";


// export const deleteProduct = (productId) => {
//   return {
//     type: "DELETE_PRODUCT",
//     payload: {
//       productId: productId,
//     },
//   };
// };

export const deleteProduct = (productId) => {
    return async (dispatch) => {

        try {
            await axios.delete(`http://localhost:8080/movies/${productId}`) // we delete the product from the B.E that have this ID, no response will be back in the del. case
                                                                             
            dispatch({
                type: "DELETE_PRODUCT",
                payload: {
                  productId: productId,
                },
              });

        } catch (error) {
            console.log(error)
        }
    }
    
  };
  

// export const addProduct = (product) => {
//   return {
//     type: ADD_PRODUCT,
//     payload: {
//       product: product,
//     },
//   };
// };

export const addProduct = (product)=> {
    return async(dispatch)=>{
        try {
            const formData = new FormData();
            for (const key in product)
            formData.append(key, product[key]);

           const res = await axios.post(`http://localhost:8080/movies`, formData)
           //console.log(product)
            dispatch({
                type:ADD_PRODUCT,
                payload: {
                    product:res.data,
                }
            })
        } catch (error) {
            console.log(error.message)
        }

}}



// export const updateProduct = (updatedProducts) => {
//   return {
//     type: UPDATE_PRODUCT,
//     payload: {
//       updatedProducts: updatedProducts,
//     },
//   };
// };


export const updateProduct = (updatedProduct) => {
  return async(dispatch)=>{
  try {
    const formData = new FormData();
    for (const key in updatedProduct)
    formData.append(key, updatedProduct[key]);

      const res = await axios.put(`http://localhost:8080/movies/${updatedProduct.id}`,formData)
      dispatch({
          type: UPDATE_PRODUCT,
          payload: {
              updatedProduct:res.data,
          }
      })
  } catch (error) {
      console.log(error.message)
  }

}}

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:8080/movies/");
      console.log(res.data)
      dispatch({
        type: FETCH_PRODUCTS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
