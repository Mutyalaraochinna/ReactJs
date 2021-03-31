import React from "react";
interface IProps{
    key1:string;
    key2:string;
    key3:(arg1:any)=>any;
    key4:(arg1:any)=>any;
}
interface IState{}
class DemoTwo extends React.Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    };
    render(){
        return(
            <React.Fragment>
                <h1>{this.props.key1}</h1>
                <h1>{this.props.key2}</h1>
                <button onClick={ ()=>{this.props.key3("ReactJS")} }>ClickMe</button>
                <button onClick={ ()=>{this.props.key4("NodeJS")} }>ClickMe</button>
            </React.Fragment>
        )
    };
};
export default DemoTwo;