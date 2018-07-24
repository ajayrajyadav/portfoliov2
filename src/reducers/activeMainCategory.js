import {CHANGE_ACTIVE_MAIN_CATEGORY} from "../actions/index";

export default function activeMainCategory(state={}, action){
    switch(action.type){
        case CHANGE_ACTIVE_MAIN_CATEGORY:{

            return {
                ...state,
                activeMainCategory:action.payload
            }
        }
        default:
            return state
    }
}
