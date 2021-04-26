import React, { Component } from "react";
import { History,LocationState } from "history";

interface IProps{
    history:History<LocationState>;
}
interface IState{}


class SigninScreen extends Component<IProps,IState>{

    uemail = React.createRef<HTMLInputElement>();
    password = React.createRef<HTMLInputElement>();
    
    constructor(props:IProps){
        super(props);
    };

    myFun = (event:any)=>{
        event.preventDefault();
        this.props.history.push(`/register/${this.uemail.current?.value}/${this.password.current?.value}`);
    };


    render(){
        return(
            <React.Fragment>
                <div>
                    <form className="form" onSubmit={this.myFun}>

                        <div>
                            <h1>Signin</h1>
                        </div>

                        <div>
                            <label>Email Addreess</label>
                            <input type="email" ref={this.uemail}></input>
                        </div>

                        <div>
                            <label>Password</label>
                            <input type="password" ref={this.password}></input>
                        </div>

                        <div>
                            <label></label>
                            <input type="submit" value="Sign In"></input>
                        </div>

                        <div>
                            <label></label>
                            <div>New User ? {' '} <a href="#">Create New Account</a></div>
                        </div>

                    </form>
                </div>
            </React.Fragment>
        )
    }


};

export default SigninScreen;