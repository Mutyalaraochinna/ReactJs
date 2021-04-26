import React, { Component } from "react";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
import SigninScreen from "./screens/SigninScreen";
import RegisterScreen from "./screens/RegisterScreen";

interface IState{}

interface IProps{}

class App extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    };

    render(){
      return(
        <React.Fragment>
            <Router>
                <br></br><br></br>
                 <Route path="/" component={SigninScreen} exact={true} strict></Route>
                <Route path="/register/:uemail/:password" component={RegisterScreen} exact={true} strict></Route>
            </Router>
        </React.Fragment>
      )
    }
};

export default App;