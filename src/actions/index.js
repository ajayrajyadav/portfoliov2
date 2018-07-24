export const CHANGE_ACTIVE_MAIN_CATEGORY = 'CHANGE_ACTIVE_MAIN_CATEGORY'
export const CHANGE_ACTIVE_SUB_CATEGORY = 'CHANGE_ACTIVE_SUB_CATEGORY'

export function changeActiveMainCategory(mainCategory){

    return{
        type: CHANGE_ACTIVE_MAIN_CATEGORY,
        payload: mainCategory

    }
}

export function changeActiveSubCategory(subCategory){

    return{
        type: CHANGE_ACTIVE_SUB_CATEGORY,
        payload: subCategory

    }
}
