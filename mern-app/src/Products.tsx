import React, {Component} from "react";

import axios from "axios";
import { Avatar, Paper, Table, TableBody, TableCell, TableContainer, TableHead ,TableRow} from "@material-ui/core";

interface IState{
    products:any[];
};

interface IProps{};

class Products extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state = {
            products:[]
        }
    };

    myfun = async ()=>{}
    
    componentDidMount(){
        axios.get('http://localhost:8080/products').then((posRes)=>{
            const {data}= posRes;
            this.setState({
                products:data
            })

        },(errRes)=>{
            console.log(errRes);
        });

    };

    render(){
        
        return(
            <React.Fragment>
                <TableContainer component={Paper}>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Brnad</TableCell>
                        <TableCell>Qantity</TableCell>
                        <TableCell>Count</TableCell>
                        <TableCell>Rating</TableCell>
                        <TableCell>Image</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {this.state.products.map((element, index)=>(
                        <TableRow key={index}>
                            <TableCell>{element.name}</TableCell>
                            <TableCell>{element.brand}</TableCell>
                            <TableCell>{element.qantity}</TableCell>
                            <TableCell>{element.countInStock}</TableCell>
                            <TableCell>{element.rating}</TableCell>
                            <TableCell><Avatar src={element.image} alt={element.name}></Avatar> </TableCell>
                        </TableRow>

                    ))}
                        
                    </TableBody>
                    </Table>
                </TableContainer>
            </React.Fragment>
        )
    }
    
};

export default Products;