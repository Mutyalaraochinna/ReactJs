import Country from "../model/Countries";
import { CountriesTypes, COUNTRIES_LOADING, COUNTRIES_LOADING_FAIL, COUNTRIES_LOADING_SUCCESS } from "../types/CountriesTypes";
interface IState{
    loading:boolean;
    countries :Country[];
    error : string;
};
const initialState:IState = {
    loading :false,
    countries :[],
    error:""
}
const CountriesReducer = (state = initialState, action:CountriesTypes) =>{
    switch(action.type){
        case COUNTRIES_LOADING:
            case COUNTRIES_LOADING_SUCCESS:
                case COUNTRIES_LOADING_FAIL:
                    return{
                        ...state,
                        loading : action.loading,
                        error:action.error,
                        countries: action.countries
                    }
                    break;
                    default:
                    return state;
    }

};
export default CountriesReducer;