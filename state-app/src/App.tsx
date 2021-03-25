import React from 'react';

interface Istate{
  strData : string;
  numData : number;
  booleanData : boolean;
  stringArray : string[];
  objData : any;
  products : any[];
};

interface Iprops{};

class app extends React.Component<Iprops, Istate>{
  constructor(props:Iprops){
    super(props);
    this.state = {
        strData : "Welocme to typescript",
        numData : 1000,
        booleanData : true,
        stringArray : ['Angular', 'ReactJs', 'VueJs'],
        objData : {'key1':'Hello'},
        products : [{'p_id':111, 'p_name':'p_one','p_cost':1000},
        {'p_id':222, 'p_name':'p_two','p_cost':2000},
        {'p_id':333, 'p_name':'p_three','p_cost':3000}
      ]

    }
  }
  render(){
    return(
      <React.Fragment>
        <h1>{this.state.strData}</h1>
        <h1>{this.state.numData}</h1>
        <h1>{JSON.stringify(this.state.booleanData)}</h1>
        {this.state.stringArray.map((element:string,index:number)=>(
        <h1>{element}</h1>
        ))
        }
        <h1>{this.state.objData.key1}</h1>
        <table>
          <tr>
            <th>SNO</th>
            <th>P_ID</th>
            <th>P_NAME</th>
            <th>P_COST</th>
          </tr>
        </table>
        {this.state.products.map((element:any, index:number)=>(
          <tr key={index}>
            <td>{index}</td>
            <td>{element.p_id}</td>
            <td>{element.p_name}</td>
            <td>{element.p_cost}</td>
          </tr>
        ))}
      </React.Fragment>
    )
  };
};
export default app;
