import React, {Component} from "react";
import Child from "./Child";

interface IProps{}

interface IState{
    name : string;
    address : string;
    course : string;
}

class Parent extends Component<IProps, IState>{
    constructor(props:IProps){
        super(props);
        this.state = {
            name : "chinna",
            address : "Hyderabad",
            course : "Reactjs"
        }
    }

    myfun = () =>{
        this.setState({
            name : "Mutyalarao",
            address : "Andra pradesh",
            course : "ReactJs"
        })
    }
    render(){
        return(
            <React.Fragment>
                <Child 
                key1={this.state.name}
                key2={this.state.address}
                key3={this.state.course}
                key4={this.myfun}
                ></Child>
            </React.Fragment>
        )
    }

};
export default Parent;