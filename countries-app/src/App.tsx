import React, {Component} from "react";
import {connect} from "react-redux";
import getCountries from "./actions/CountriesAction"

 interface IState{};
 interface IProps{
   my_fun:any;
   res:any;
 };

 class App extends Component<IProps, IState>{
   constructor (props:IProps){
     super(props);
   };
   componentDidMount(){
     this.props.my_fun();
   };

   render(){
    const {loading,countries,message} = this.props.res;
     return(
       <React.Fragment>
         <p>Loading Boolean value :"" {JSON.stringify(loading)} ""</p>
         <p>Countries Data : <br></br>{JSON.stringify(countries)}</p><br />
         <p>Message : {JSON.stringify(message)}</p>

       </React.Fragment>
     )
   }
 };

 const recive = (state:any) =>{
   return{
     res: state
   }
 }
//dispatch

const send = (dispatch:any) =>{
  return{
    my_fun : ()=>{ dispatch( getCountries() ) }
  }
}


 export default connect (recive,send)(App);