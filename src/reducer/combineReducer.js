import { combineReducers } from "redux";
import userInfo from "./userInfo";
const allReducer = combineReducers({
    userInfo: userInfo
})

export default allReducer