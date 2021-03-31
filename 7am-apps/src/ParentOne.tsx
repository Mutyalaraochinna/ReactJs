import React from "react";

interface IState{}

interface IProps{
    key1 : string;
    key2 : string;
    key3 : number;
    key4 : number;
    key5 : number;
    key6 : string;
    
}
    
class ParentOne extends React.Component<any,IProps, IState>{
    constructor(props:IProps){
        super(props);
        console.log(this.props);
    }
    render(){
        return(
            <React.Fragment>
                <h1>Get the Data from Child to Parent</h1>
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Brand</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>CountInStock</th>
                        <th>Image</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{this.props.key1}</td>
                        <td>{this.props.key2}</td>
                        <td>{this.props.key3}</td>
                        <td>{this.props.key4}</td>
                        <td>{this.props.key5}</td>
                        <td><img src={this.props.key6} width="50" alt="fashion"></img></td>
                    </tr>
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
    
}
export default ParentOne;