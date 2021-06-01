/*
    1) rating
    2) numReviews
    => fa fa-star
    => fa fa-star-half-o
    => fa fa-star-o
*/
import React, { Component } from "react";

interface IState{

};

interface IProps{
    rating:number;
    numReviews:number;
};

class Rating extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    };
    render(){
        return(
            <React.Fragment>
                <div className="rating">
                    <span className={this.props.rating>=1 ? "fa fa-star" : this.props.rating>=0.5 ? "fa fa-star-half-o" : "fa fa-star-o"}></span>
                    <span className={this.props.rating>=2 ? "fa fa-star" : this.props.rating>=1.5 ? "fa fa-star-half-o" : "fa fa-star-o"}></span>
                    <span className={this.props.rating>=3 ? "fa fa-star" : this.props.rating>=2.5 ? "fa fa-star-half-o" : "fa fa-star-o"}></span>
                    <span className={this.props.rating>=4 ? "fa fa-star" : this.props.rating>=3.5 ? "fa fa-star-half-o" : "fa fa-star-o"}></span>
                    <span className={this.props.rating>=5 ? "fa fa-star" : this.props.rating>=4.5 ? "fa fa-star-half-o" : "fa fa-star-o"}></span>

                    <span>{this.props.numReviews} Reviews</span>
                </div>
            </React.Fragment>
        )
    }
};

export default Rating;