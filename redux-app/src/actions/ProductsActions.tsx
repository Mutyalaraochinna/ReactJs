import axios from "axios";
import { Dispatch } from "redux";
import { ProductsActionTypes, PRODUCTS_LOADING, PRODUCTS_LOADING_FAIL, PRODUCTS_LOADING_SUCCESS } from "../types/ProductActionTypes";

const getProducts = ()=>{
    return async (dispatch:Dispatch<ProductsActionTypes>)=>{
        dispatch({
            type : PRODUCTS_LOADING,
            loading: false,
            products : [],
            message : ""
        })

        try{
            const res = await axios.get("https://www.w3schools.com/angular/customers.php");
            const { data } = res;
            dispatch({
                loading:true,
                products : data,
                message : "",
                type : PRODUCTS_LOADING_SUCCESS
            })
        }catch(err){
          dispatch({
              loading:true,
              products:[],
              message:err.message,
              type:PRODUCTS_LOADING_FAIL
          })  
        }
    }
};

export default getProducts;