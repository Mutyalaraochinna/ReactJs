import React, {Component} from "react";
import {connect} from "react-redux";

class App extends Component{
  constructor(props){
    super(props);
  };
  render(){
    return(
      <React.Fragment>
        <h1>{this.props.bal}</h1>
        <button onClick={this.props.withdraw}>Withdraw</button>
      </React.Fragment>
    )
  }
};

const recive =(state)=>{
  console.log(state);
  return{
    bal : state.bal
  }
}

const send = (dispatch) =>{
  return{

  }
}
