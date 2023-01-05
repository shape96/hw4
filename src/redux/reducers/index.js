import {combineReducers} from "redux";
import OneUserReducer from "./OneUserReducer";
import titleReducer from "./titleReducer";
import usersReducer from "./usersReducer";




export const rootReducer = combineReducers({
    titleReducer,
    usersReducer,
    OneUserReducer
})

