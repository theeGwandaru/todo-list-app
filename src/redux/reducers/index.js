import {combineReducers} from "redux";
import visibilityFiler from "./visibilityFilter";
import todos from "./todos";

export default combineReducers({todos,visibilityFiler});