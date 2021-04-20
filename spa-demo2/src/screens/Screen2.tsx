import React, {Component} from "react";
import {match as Match} from "react-router-dom";
import {Location} from "history";

interface routeParams{
    p_id:any;
};
interface IProps{
    match:Match<routeParams>;
    location :Location;
};
interface IState{};

class Screen2 extends Component<IProps, IState> {
    constructor(props:IProps) {
        super(props);
    };
    render(){
        const qty = this.props.location.search?Number(this.props.location.search.split("=")[1]):1
        return(
            <React.Fragment>
                <h1>P_ID.....{this.props.match.params.p_id}</h1>
                <h1>Qty......{qty}</h1>
            </React.Fragment>
        )
    }
};
export default Screen2;