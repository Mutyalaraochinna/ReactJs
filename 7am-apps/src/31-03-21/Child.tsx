import React, {Component} from "react";

interface IProps{
    key1 : string;
    key2 : string;
    key3 : string;
    key4 : ()=>any;
};

interface IState{
    
};

class Child extends React.Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    }
    render(){
        return(
            <React.Fragment>
                <h1>{this.props.key1}</h1>
                <h1>{this.props.key2}</h1>
                <h1>{this.props.key3}</h1>
                <button onClick = {this.props.key4}>Click me dude</button>
            </React.Fragment>
        )
    }

};
export default Child;