import { AppBar, Button, IconButton, makeStyles, Toolbar, Typography } from "@material-ui/core";
import React, { Component } from "react";
import MenuIcon from '@material-ui/icons/Menu';



interface IProps{}

interface IState{}



class App extends Component<IProps,IState>{
    constructor(props:IProps){
      super(props);
    };
    render(){
      return(
         <React.Fragment>
             <div className="flex">
               <AppBar position="static">
                  <Toolbar>
                     <IconButton edge="start" className="MenuIcon" color="inherit">
                        <MenuIcon />
                     </IconButton>
                     <Typography variant="h6" className="flex" color="inherit">
                          AshokIT
                     </Typography>
                     <Button color="inherit" >Login</Button> 
                  </Toolbar>
               </AppBar>
             </div>
         </React.Fragment>
      )
    }
};

export default App;