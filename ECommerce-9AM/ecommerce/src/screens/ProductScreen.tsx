import React, { Component } from "react";
import { match as Match, NavLink } from "react-router-dom";

interface IState{}

interface IProps{
    match : Match<paramRoutes>;
}

interface paramRoutes{
    id:any;
}


class ProductScreen extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    }
    render(){
        return(
            <React.Fragment>
                <NavLink to="/" className="back_screen">back to home <i className="fa fa-home"></i></NavLink>
                <h1>{this.props.match.params.id}</h1>
            </React.Fragment>
        )
    }
};

export default ProductScreen;