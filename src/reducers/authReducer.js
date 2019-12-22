import {SET_USER} from "../actions/types";

const initialState = {};

export default function reducer(state= initialState, action){
    switch (action.type) {
        case SET_USER: {
            const {user} = action;
            return {
              ...user
            };
        }
        default:
            return state;
    }
}
