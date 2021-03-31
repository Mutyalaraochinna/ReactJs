import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import RecordsOne from "./RecordsOne";
// import Parent from "./Parent";
// import ParentOne from "./ParentOne";
// import ChildOne from "./ChildOne";
// import Parent from "./31-03-21/Parent"
import DemoOne from "./31-03-21/DemoOne"

ReactDOM.render(
  <React.StrictMode>
    <DemoOne /> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
