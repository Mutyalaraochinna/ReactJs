import React from "react";
import axios from "axios";
import Country from "./modal/countries";
// import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import { DataGrid } from '@material-ui/data-grid';

interface IState{
    countries:Country[];
};
interface IProps{

};
class App extends React.Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state={
          countries:[]
        }
    };
    componentDidMount(){
        axios.get(`https://restcountries.eu/rest/v2/all`).then((posRes)=>{
            const {data} = posRes;
            this.setState({
              countries:data
            })
        },(errRes)=>{
            console.log( errRes );
        });
    };
    render(){
      return(
        <React.Fragment>
           <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell>Count</TableCell>
          <TableCell width="180">Name</TableCell>
          <TableCell>Capital</TableCell>
          <TableCell>Region</TableCell>
          <TableCell>SubRegion</TableCell>
          <TableCell>population</TableCell>
          <TableCell>Flag</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         {this.state.countries.map((element:any,index:number)=>(
            <TableRow key={index}>
            <TableCell>{index+1}</TableCell>
            <TableCell>{element.name}</TableCell>
            <TableCell>{element.capital}</TableCell>
            <TableCell>{element.region}</TableCell>
            <TableCell>{element.subregion}</TableCell>
            <TableCell>{element.population}</TableCell>
            <TableCell><img src={element.flag} alt="" width="50"/></TableCell>
        </TableRow> 
          ))}
        </TableBody>
      </Table>
    </TableContainer>
           
        </React.Fragment>
      )
    };
};
export default App;