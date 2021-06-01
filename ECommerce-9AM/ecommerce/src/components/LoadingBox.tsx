import React, {Component} from "react";
interface IProps{};
interface IState{};
class LoadingBox extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);

    };
    render(){
        return(
            <React.Fragment>
                 <i className="fa fa-spinner fa-spin"></i>
            </React.Fragment>
        )
    }

};
export default LoadingBox;