import React from "react";

interface Iprops{}
interface Istate{}

class First extends React.Component<Iprops, Istate>{

    constructor(props:Iprops){
        super(props);
    }

    render(){
        return(
            <h1>Hey!... I am your first Component</h1>
        );
    }

}
export default First;