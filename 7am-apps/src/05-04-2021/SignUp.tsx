import React, { createRef, HtmlHTMLAttributes } from "react";

interface IProps{}

interface IState{
    login_status :string;
    inputValue : string;
    checkValue : string;
}

class SignUp extends React.Component<IProps, IState>{
    
    first_name = createRef<HTMLInputElement>();
    last_name = createRef<HTMLInputElement>();
    email = createRef<HTMLInputElement>();
    mobile = createRef<HTMLInputElement>();
    address = createRef<HTMLInputElement>();
    gender = createRef<HTMLInputElement>();
    language = createRef<HTMLInputElement>();
    country = createRef<HTMLSelectElement>();
    
    
    constructor(props:IProps){
        super(props);
        this.state = {
            login_status: '',
            inputValue : '',
            checkValue : ''
            }
    
        }
        singup = () =>{
            console.log(this.first_name.current?.value);
            console.log(this.last_name.current?.value);
            console.log(this.email.current?.value);
            console.log(this.mobile.current?.value);
            console.log(this.address.current?.value);
            console.log(this.state.inputValue);
            console.log(this.state.checkValue);
            console.log(this.country.current?.value);
        }
        change(e:any){
            const val = e.target.value;
            this.setState({
                inputValue : val
            })
        }
        check(e:any){
            const val = e.target.value;
            this.setState({
                checkValue : val
            })
        }
   
    render(){
        return(
            <React.Fragment>
              <br/><br/>
              <label htmlFor="First Name">First Name : </label>
              <input type="text" ref={this.first_name}></input>
              <br/><br/>
              <label htmlFor="Last Name">Last Name : &nbsp;</label>
              <input type="text" ref={this.last_name}></input>
              <br/><br/>
              <label htmlFor="Email">Email : &emsp;&emsp;&ensp;</label>
              <input type="email" ref={this.email}></input>
              <br/><br/>
              <label htmlFor="Mobile">Mobile : &emsp;&emsp;</label>
              <input type="number" ref={this.mobile}></input>
              <br/><br/>
              <label htmlFor="Address">Address : &emsp;&ensp;</label>
              <input type="text" ref={this.address}></input>
              <br/><br/>
              <label htmlFor="Gender">Gender: &emsp;&ensp;</label>
              <input type="radio" onChange={this.change.bind(this)} name="male" value="male"/> Male
              <input type="radio" onChange={this.change.bind(this)} name="female" value="female"/> Female
              <br/><br/>
              <label htmlFor="Language"> Language : &emsp;</label>
              <input type="checkbox" onChange={this.check.bind(this)} value="Telugu"/> Telugu
              <input type="checkbox" onChange={this.check.bind(this)} value="English"/> English
              <input type="checkbox" onChange={this.check.bind(this)} value="Hindi"/> Hindi
              <br/><br/>
              <label htmlFor="Country">Country : &emsp;&emsp;</label>
              <select ref={this.country}>
                 <option value="India">India</option>
                 <option value="Afganistan">Afghanistan</option>
                <option value="Argentina">Argentina</option>
                </select>
              <br/><br/>
              <button type="submit" onClick={this.singup}>Login</button>
            </React.Fragment>
        )
    }

}
export default SignUp;
