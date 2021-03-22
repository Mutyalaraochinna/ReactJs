import React from "react";

interface Iprops{}

interface Istate{}

class FirstOne extends React.Component<Iprops, Istate>{

    // constructor(props:Iprops){
    //     super(props);
    // }
    render(){
        return (
            <h1>Successfully created React First app !!!</h1>
        );
    }
}
export default FirstOne;