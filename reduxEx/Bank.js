//store

//initial state

//state

//reducer

//dispatch

//type (actions)

//payload  (value)

//subscribe


const { createStore } = require("redux");


const initialState = {
    bal : 10000
};

const reducer = (state = initialState,action)=>{
    switch(action.type){
        case "WITHDRAW":
            return{
                ...state,
                bal : state.bal - action.payload
            }
            break;
        case "DEPOSIT":
            return{
                ...state,
                bal : state.bal + action.payload
            }
            break;
        default:
            return state;
    }
};


const store = createStore(reducer);

//access the result
store.subscribe(()=>{
    console.log( store.getState() );
});

store.dispatch({ type:"WITHDRAW", payload:5000 });    //Req1
store.dispatch({ type:"DEPOSIT", payload:10000 });    //Req2