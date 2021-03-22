import React from "react";
import Secound from "./secound";
import First from "./first";

interface Iprops{}
interface Istate{}

class Third extends React.Component<Iprops, Istate>{

    constructor(props:Iprops){
        super(props);
    }

    render(){
        return(
            <React.Fragment>
                <First></First>
                <Secound></Secound>
            </React.Fragment>
        );
    }

}
export default Third;