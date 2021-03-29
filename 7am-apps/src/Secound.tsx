import React from "react";

interface Iprops{
    key1: string;
    key2: number;
    key3: boolean;
    key4: any;
    key5: any[];
};

interface Istate{
    
};

class Secound extends React.Component<Iprops, Istate>{
    constructor(props:Iprops){
        super(props);
    };
    render(){
        return(
            <React.Fragment>
            <h1>{this.props.key1}</h1>  
            <h1>{this.props.key2}</h1>
            <h1>{JSON.stringify(this.props.key3)}</h1>  
            <h1>{JSON.stringify(this.props.key4)}</h1>  
            <table>
                <tr>
                    <th>SNO</th>
                    <th>E_ID</th>
                    <th>E_NAME</th>
                    <th>E_SAL</th>
                </tr>
                {this.props.key5.map((element:any,index:number)=>(
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{element.p_id}</td>
                        <td>{element.p_name}</td>
                        <td>{element.p_cost}</td>
                    </tr>
                ))}
            </table>   
            </React.Fragment>     
        )
    }
}
export default Secound;
