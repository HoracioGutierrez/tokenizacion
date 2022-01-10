import { combineReducers } from "redux";
import AuthReducer from "./reducers/AuthProvider";
import LayoutReducer from "./reducers/LayoutReducer";

const reducers = combineReducers({
    layout: LayoutReducer,
    auth : AuthReducer
})

export default reducers;