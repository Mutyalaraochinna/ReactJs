import React from "react";
import SubChild from "./SubChild";
interface IState{
    
}

interface IProps{
    key1 : string;
    key2 : string;
    key3 : number;
    key4 : number;
    key5 : number;
    key6 : string;
}

class Child extends React.Component<IProps, IState>{
    constructor(props:IProps){
        super(props);
    }
    render(){
        return(
            <React.Fragment>
                <SubChild {...this.props}>
                </SubChild>
            </React.Fragment>
        )
    }
    
}
export default Child;