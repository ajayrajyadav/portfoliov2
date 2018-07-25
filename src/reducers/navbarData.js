
import {GET_NAVBAR_DATA} from "../actions/index";

export default function navbarData(state={}, action){
    switch(action.type){
        case GET_NAVBAR_DATA:{
            console.log("reducer", action.payload)

            return action.payload

        }
        default:
            return state
    }
}