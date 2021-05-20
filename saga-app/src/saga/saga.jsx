import { yellow } from "@material-ui/core/colors";
import {delay, takeLatest} from "redux-saga/effects";

export function *withdraw_stax(action){
    delay(5000);
    yield put ({type:"WITHDRAW_STAX",value:(action.value) + (action.value)});
}
export function *withdraw(){
    yield takeLatest("WITHDRAW", withdraw_stax);
}