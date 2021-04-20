import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";

interface IProps{};
interface IState{};

class  App extends Component<IProps, IState> {
  constructor(props:IProps) {
    super(props);
  };
  render(){
    return(
      <React.Fragment>
        <Router>
        <Route path="/" component={Screen1} exact={true} strict></Route>
          <Route path="/screen2/:p_id" component={Screen2} exact={true} strict></Route>
        </Router>
      </React.Fragment>
    )
  };
};

export default App;