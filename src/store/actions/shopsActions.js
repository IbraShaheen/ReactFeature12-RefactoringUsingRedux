import axios from "axios";
import { ADD_SHOP, FETCH_SHOPS } from "./types";


export const addShop = (shop)=> {
    return async(dispatch)=>{
        try {
            const formData = new FormData(); //to add an image (file type)
            for (const key in shop)
            formData.append(key, shop[key]);

          const res = await axios.post(`http://localhost:8080/shops`, formData)

            dispatch({
                type:ADD_SHOP,
                payload: {
                    shop:res.data,
                }
            })
        } catch (error) {
            console.log(error.message)
        }

}}


export const fetchShops = () => {
    return async (dispatch) => {
      try {
        const res = await axios.get("http://localhost:8080/shops/");
        //console.log(res.data)
        dispatch({
          type: FETCH_SHOPS,
          payload: res.data,
        });
      } catch (error) {
        console.log(error.message);
      }
    };
  };
  