import React from "react";

interface Iprops{
    records: any[];
};

interface Istate{
    
};

class RecordsTwo extends React.Component<Iprops, Istate>{
    constructor(props:Iprops){
        super(props);
    };
    render(){
        return(
            <React.Fragment>
                <h1>Records Props Component</h1>

            <table>
                <tr>
                    <th>Count</th>
                    <th>Name</th>
                    <th>City</th>
                    <th>Country</th>
                </tr>
                {this.props.records.map((element:any,index:number)=>(
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{element.Name}</td>
                        <td>{element.City}</td>
                        <td>{element.Country}</td>
                    </tr>
                ))}
            </table>   
            </React.Fragment>     
        )
    }
}
export default RecordsTwo;
