import Country from "../model/Countries";

export const COUNTRIES_LOADING:string = "COUNTRIES_LOADING";
export const COUNTRIES_LOADING_SUCCESS:string = "COUNTRIES_LOADING_SUCCESS";
export const COUNTRIES_LOADING_FAIL:string ="COUNTRIES_LOADING_FAIL";

interface CountriesAsync{
    loading : boolean;
    countries : Country[];
    error :string;
};

interface CountriesLoading extends CountriesAsync{
    type : typeof COUNTRIES_LOADING
};

interface CountriesLoadingSuccess extends CountriesAsync{
    type : typeof COUNTRIES_LOADING_SUCCESS
};

interface CountriesLoadingFail extends CountriesAsync{
    type : typeof COUNTRIES_LOADING_FAIL
};

export type CountriesTypes = CountriesLoading | CountriesLoadingSuccess | CountriesLoadingFail;