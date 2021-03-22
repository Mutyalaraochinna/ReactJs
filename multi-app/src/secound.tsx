import React from "react";

interface Iprops{}
interface Istate{}

class Secound extends React.Component<Iprops, Istate>{

    constructor(props:Iprops){
        super(props);
    }

    render(){
        return(
            <h1>Hey!... I am your Secound Component</h1>
        );
    }

}
export default Secound;