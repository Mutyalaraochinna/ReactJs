import React from "react";

interface IState{
    msg:string;
}

interface IProps{}

class Events extends React.Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state = {
            msg:""
        }
    };

    fun_one = ()=>{
        this.setState({
            msg : "function without arguments"
        })
    };

    fun_two = (arg1:string,arg2:string)=>{
        if(arg1 === "admin" && arg2 === "admin"){
            this.setState({
                msg : "Login Success"
            })
        }else{
            this.setState({
                msg : "Login Fail"
            })
        }  
    }

    render(){
        return(
            <React.Fragment>
                <h1>{this.state.msg}</h1>

                <button onClick={ this.fun_one }>Button1</button>

                <button onClick={ ()=>this.fun_two("admin","admin123") }>Button2</button>
            </React.Fragment>
        )
    };

};

export default Events;