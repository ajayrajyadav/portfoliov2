import {CHANGE_ACTIVE_SUB_CATEGORY} from "../actions/index";

export default function activeSubCategory(state={}, action){
    switch(action.type){
        case CHANGE_ACTIVE_SUB_CATEGORY:{
            console.log({...state,
                ...activeSubCategory,
                activeSubCategory:action.payload
            })

            return {
                ...state,
                ...activeSubCategory,
                activeSubCategory:action.payload
            }
        }
        default:
            return state
    }
}
