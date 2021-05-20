import Product from "../modal/Product";
import { ProductsActionTypes, PRODUCTS_LOADING, PRODUCTS_LOADING_FAIL, PRODUCTS_LOADING_SUCCESS } from "../types/ProductActionTypes";

interface IState{
    loading:boolean;
    products:Product[];
    message:string;
}

const initialState:IState= {
    loading:false,
    products:[],
    message:""

};

const ProductReducer = (state=initialState,action:ProductsActionTypes):IState=>{
    switch(action.type){
        case PRODUCTS_LOADING:
        case PRODUCTS_LOADING_SUCCESS:
        case PRODUCTS_LOADING_FAIL:
            return{
                ...state,
                loading:action.loading,
                products:action.products,
                message:action.message
            }
            break;
        default:
            return state;
    }
};
export default ProductReducer;