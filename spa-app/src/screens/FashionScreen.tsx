import React, { Component } from "react";

interface IState{
    msg : string;
};

interface IProps{};


class  FashionScreen extends Component<IProps, IState> {
    constructor(props:IProps) {
        super(props);
        this.state = {
            msg : "Welcome to Fashion Festival"
        }
        
    };
    render(){
        return(
            <React.Fragment>
                <h1 style={{color:'Red'}}>{this.state.msg}</h1>
            </React.Fragment>
        )
    }

}
export default FashionScreen;
