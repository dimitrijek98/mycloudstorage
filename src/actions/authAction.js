import {LOGIN} from "./types";

export function login(user){
    return {
        type: LOGIN,
        user
    }
}
