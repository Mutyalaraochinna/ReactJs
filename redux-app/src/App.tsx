//dispatch & subscription
import React, { Component } from "react";
import { connect } from "react-redux";
import getProducts from "./actions/ProductsActions";

interface IState{}

interface IProps{
   my_fun : any;
   response:any;
}

class App extends Component<IProps,IState>{
    constructor(props:IProps){
    
    super(props);
  }

  componentDidMount(){
      this.props.my_fun();
  };

  render(){
    
    const {loading,products,message} = this.props.response;
    return(
       <React.Fragment>
          <p>{JSON.stringify(loading)} ====== {JSON.stringify(products)} ===== {message}</p>
       </React.Fragment>
    )
  }
};

//subscription
const receive = (state:any)=>{
    return{
      response : state
    }
};

//dispatch
const send = (dispatch:any)=>{
    return{
      my_fun : ()=>{ dispatch(getProducts()) }      
    }
}

export default connect(receive,send)(App);