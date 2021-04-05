import React, { createRef } from "react";

interface IProps{}

interface IState{
    login_status :string;
}

class Login extends React.Component<IProps, IState>{
    
    u_name = createRef<HTMLInputElement>();
    u_pwd = createRef<HTMLInputElement>();
    
    constructor(props:IProps){
        super(props);
        this.state = {
            login_status: ''
        }
    }

    login = () =>{
        if(this.u_name.current?.value === 'admin' && this.u_pwd.current?.value === 'admin'){
            this.setState ({
                login_status : 'Success'
            })
        }else{
            this.setState ({
                login_status : 'Fail'
            }) 
        }
    }
    render(){
        return(
            <React.Fragment>
              <br/><br/>
              <input type="text" ref={this.u_name}></input>
              <br/><br/>
              <input type="password" ref={this.u_pwd}></input>
              <br/><br/>
              <button type="submit" onClick={this.login}>Login</button>
                <br/><br/>
              <h1>{this.state.login_status}</h1>
            </React.Fragment>
        )
    }

}
export default Login;
