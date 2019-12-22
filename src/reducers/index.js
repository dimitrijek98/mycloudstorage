import authReducer from './authReducer';
import {combineReducers} from "redux";

export const rootReducer =combineReducers({
    user: authReducer
});
