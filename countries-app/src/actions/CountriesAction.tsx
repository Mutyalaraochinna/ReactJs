import axios from "axios";
import { Dispatch } from "redux";
import { CountriesTypes, COUNTRIES_LOADING, COUNTRIES_LOADING_FAIL, COUNTRIES_LOADING_SUCCESS } from "../types/CountriesTypes";

const getCountries = () =>{
    return async(dispatch:Dispatch<CountriesTypes>)=>{
        dispatch({
            type: COUNTRIES_LOADING,
            loading:false,
            countries:[],
            error: ""
        })
        try {
            const res = await axios.get('https://restcountries.eu/rest/v2/all');
            const {data}=res;
            dispatch({
                type:COUNTRIES_LOADING_FAIL,
                loading:true,
                countries:data,
                error:""
            })
            
        } catch (err) {
            dispatch({
                type:COUNTRIES_LOADING_FAIL,
                loading:true,
                countries:[],
                error:err.message
            })
        }

    }

};
export default getCountries;