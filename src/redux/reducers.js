import { combineReducers } from "redux";
import LayoutReducer from "./reducers/LayoutReducer";

const reducers = combineReducers({
    layout: LayoutReducer
})

export default reducers;