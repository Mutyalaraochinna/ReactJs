import React, { FunctionComponent } from "react";

type IProps = {
    key1 :any,
    key2 :any,
    key3:any
};

const Component2:FunctionComponent<IProps> = ({key1,key2,key3})=>{
    return(
        <React.Fragment>
            <h1>{key1}</h1>
            <h1>{key2}</h1>
            <h1>{key3}</h1>
        </React.Fragment>
    )

};

export default Component2;