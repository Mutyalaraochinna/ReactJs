import React, { Component } from "react";
import { connect } from "react-redux";
import getProducts from "../actions/ProductsActions";

interface IState{}

interface IProps{
    getProducts_fn : any;
    result : any;
}

class ProductsScreen extends Component<IProps,IState>{
     constructor(props:IProps){
         super(props);
     }

     componentDidMount(){
        this.props.getProducts_fn();
     };

     render(){
         const { loading,products,error } = this.props.result;
         return(
             <React.Fragment>
                 {JSON.stringify(loading)}....{JSON.stringify(products)}....{error}
             </React.Fragment>
         )
     }
};


const receive = (state:any)=>{
    return{
        result : state.products
    }
};



const send = (dispatch:any)=>{
    return{
        getProducts_fn : ()=>{ dispatch(getProducts()) }
    }
};


export default connect(receive,send)(ProductsScreen);