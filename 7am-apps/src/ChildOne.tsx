import React from "react";
import ParentOne from "./ParentOne";

interface IState{
    name : string;
    brand : string;
    price : number;
    qty : number;
    countInStock : number;
    image : any;
}

interface IProps{}

class ChildOne extends React.Component<IProps, IState>{
    constructor(props:IProps){
        super(props);
        this.state = {
            name :"Chinna",
            brand : "Polo",
            price : 2000,
            qty : 10,
            countInStock : 201,
            image : "https://mean7pm.s3.ap-south-1.amazonaws.com/p1.jpg"
        }
    }
    render(){
        return(
            <React.Fragment>
                <ParentOne 
                key1={this.state.name}
                key2={this.state.brand}
                key3={this.state.price}
                key4={this.state.qty}
                key5={this.state.countInStock}
                key6={this.state.image}
                >
                </ParentOne>
            </React.Fragment>
        )
    }
    
}
export default ChildOne;