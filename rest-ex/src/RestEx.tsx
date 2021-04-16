import React from "react";
import axios from "axios";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
interface IState{
    res:any;
}
interface IProps{}
class RestEx extends React.Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state = {
            res:{}
        }
    };
    componentDidMount(){
        axios.get(`https://www.w3schools.com/angular/customers.php`).then((posRes)=>{
            const {data} = posRes;
            this.setState({
                res : data
            })
        },(errRes)=>{
            console.log( errRes );
        })
    };
    render(){
        return(
            <React.Fragment>
                {JSON.stringify( this.state.res )}
                <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                    <TableRow>
                    <TableCell>Count</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>City</TableCell>
                    <TableCell>Country</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {this.state.res.map((element:any,index:number)=>(
                        <TableRow key={index}>
                        <TableCell>{index+1}</TableCell>
                        <TableCell>{element.Name}</TableCell>
                        <TableCell>{element.City}</TableCell>
                        <TableCell>{element.Country}</TableCell>
                    </TableRow> 
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </React.Fragment>
        )
    }
};

export default RestEx;