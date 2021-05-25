import axios from "axios";
import { Dispatch } from "redux";
import { ProductsActionTypes, PRODUCTS_LOADING, PRODUCTS_LOADING_FAIL, PRODUCTS_LOADING_SUCCESS } from "../types/ProductActionTypes";

const getProducts = ()=>{
    return async (dispatch:Dispatch<ProductsActionTypes>)=>{
        dispatch({
            type : PRODUCTS_LOADING,
            loading: false,
            products : [],
            error : ""
        })

        try{
            const res = await axios.get("http://localhost:8080/api/products");
            const { data } = res;
            dispatch({
                loading:true,
                products : data,
                error : "",
                type : PRODUCTS_LOADING_SUCCESS
            })
        }catch(err){
          dispatch({
              loading:true,
              products:[],
              error:err.message,
              type:PRODUCTS_LOADING_FAIL
          })  
        }
    }
};

export default getProducts;