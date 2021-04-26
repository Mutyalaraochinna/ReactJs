import React, {Component} from "react";
import { match as Match } from "react-router-dom";
interface routeParams{
    uemail:any;
    password:any;
};
interface IProps{
    match:Match<routeParams>;
};
interface IState{}
class RegistrationScreen extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    };
    render(){
        return(
            <React.Fragment>
                <h1>{this.props.match.params.uemail}</h1>  
                <h1>{this.props.match.params.password}</h1>
            </React.Fragment>
        )
    };
};
export default RegistrationScreen;