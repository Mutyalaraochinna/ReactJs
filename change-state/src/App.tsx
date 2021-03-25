import React from 'react';

interface Istate{
  subString : string;
};

interface Iprops{};

class App extends React.Component<Iprops, Istate>{
  constructor(props:Iprops){
    super(props);
    this.state = {
      subString : "Welocme to ReactJs"
  }
}
my_fun = ()=>{
 this.setState({
  subString : "Goback to  the Typescript",
 });
}
  render(){
    return(
      <React.Fragment>
        <h1>{this.state.subString}</h1>
        <button onClick={this.my_fun}>Goto Typescript</button>
        <h3>Change State Project</h3>
      </React.Fragment>
    )
  };
};
export default App;
