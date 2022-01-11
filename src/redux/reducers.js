import { combineReducers } from "redux";
import AuthReducer from "./reducers/AuthReducer";
import LayoutReducer from "./reducers/LayoutReducer";

const reducers = combineReducers({
    layout: LayoutReducer,
    auth : AuthReducer
})

export default reducers;