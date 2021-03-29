import React from "react";
import Secound from "./Secound";

interface Iprops{};

interface Istate{
    key1: string;
    key2: number;
    key3: boolean;
    key4: any;
    key5: any[];
};

class First extends React.Component<Iprops, Istate>{
    constructor(props:Iprops){
        super(props);
        this.state ={
            key1 : "ReactJS",
            key2 : 50000,
            key3 : true,
            key4 : {'key' : 'Welcome'},
            key5 : [
                {'p_id' : 100, 'p_name' : 'Chinna', 'p_cost' : 100000},
                {'p_id' : 200, 'p_name' : 'Chinna', 'p_cost' : 200000},
                {'p_id' : 300, 'p_name' : 'Chinna', 'p_cost' : 300000},
                {'p_id' : 400, 'p_name' : 'Chinna', 'p_cost' : 400000},
                {'p_id' : 500, 'p_name' : 'Chinna', 'p_cost' : 500000},
        ]

        };
    };
    render(){
        return(
            <React.Fragment>
                <Secound key1={this.state.key1}
                key2={this.state.key2}
                key3={this.state.key3}
                key4={this.state.key4}
                key5={this.state.key5}></Secound>
            </React.Fragment>
        )
    }
}
export default First;
