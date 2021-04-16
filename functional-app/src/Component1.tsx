import React from "react";
import { useState } from "react";
import Component2 from "./Component2";

const Component1 = () =>{
    const [key1, setKey1] = useState('ReactJs');
    const [key2, setKey2] = useState('NodeJs');
    const [key3, setKey3] = useState('MangoDB');

    return(
        <Component2 key1={key1} key2={key2} key3={key3}></Component2>
    )
};

export default Component1;