import React, { Component } from "react";

interface IState{
    msg : string;
};

interface IProps{};


class  HomeScreen extends Component<IProps, IState> {
    constructor(props:IProps) {
        super(props);
        this.state = {
            msg : "Products Store"
        }
        
    };
    render(){
        return(
            <React.Fragment>
                <h1 style={{color:'Green'}}>{this.state.msg}</h1>
            </React.Fragment>
        )
    }

}
export default HomeScreen;
