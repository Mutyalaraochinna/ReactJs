import React, { Component } from "react";
import {BrowserRouter as Router, NavLink, Route} from "react-router-dom";
import FashionScreen from "./FashionScreen";


interface IState{
    msg : string;
};

interface IProps{};


class  HomeScreen extends Component<IProps, IState> {
    constructor(props:IProps) {
        super(props);
        this.state = {
            msg : "ECommerce Website"
        }
        
    };
    render(){
        return(
            <React.Fragment>
                <h1 style={{color:'red'}}>{this.state.msg}</h1>
                <NavLink to="/home/fashion" activeStyle={{color:"red"}} exact={true} strict >Fashion</NavLink>
            </React.Fragment>
        )
    }

}
export default HomeScreen;
