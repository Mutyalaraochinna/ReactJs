import React from "react";
import RecordsTwo from "./RecordsTwo";

interface Iprops{};

interface Istate{
    records: any[];
};

class RecordsOne extends React.Component<Iprops, Istate>{
    constructor(props:Iprops){
        super(props);
        this.state ={
            records : [ {"Name":"Alfreds Futterkiste","City":"Berlin","Country":"Germany"}, {"Name":"Ana Trujillo Emparedados y helados","City":"México D.F.","Country":"Mexico"}, {"Name":"Antonio Moreno Taquería","City":"México D.F.","Country":"Mexico"}, {"Name":"Around the Horn","City":"London","Country":"UK"}, {"Name":"B's Beverages","City":"London","Country":"UK"}, {"Name":"Berglunds snabbköp","City":"Luleå","Country":"Sweden"}, {"Name":"Blauer See Delikatessen","City":"Mannheim","Country":"Germany"}, {"Name":"Blondel père et fils","City":"Strasbourg","Country":"France"}, {"Name":"Bólido Comidas preparadas","City":"Madrid","Country":"Spain"}, {"Name":"Bon app'","City":"Marseille","Country":"France"}, {"Name":"Bottom-Dollar Marketse","City":"Tsawassen","Country":"Canada"}, {"Name":"Cactus Comidas para llevar","City":"Buenos Aires","Country":"Argentina"}, {"Name":"Centro comercial Moctezuma","City":"México D.F.","Country":"Mexico"}, {"Name":"Chop-suey Chinese","City":"Bern","Country":"Switzerland"}, {"Name":"Comércio Mineiro","City":"São Paulo","Country":"Brazil"} ] 
        };
    };
    render(){
        return(
            <React.Fragment>
                <h1>Records State Component</h1>
            <table>
                <tr>
                    <th>Count</th>
                    <th>Name</th>
                    <th>City</th>
                    <th>Country</th>
                </tr>
                {this.state.records.map((element:any,index:number)=>(
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{element.Name}</td>
                        <td>{element.City}</td>
                        <td>{element.Country}</td>
                    </tr>
                ))}
            </table>   
            <RecordsTwo records={this.state.records}></RecordsTwo>
            </React.Fragment>
        )
    }
}
export default RecordsOne;
