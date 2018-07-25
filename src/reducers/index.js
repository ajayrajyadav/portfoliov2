import { combineReducers } from 'redux';
import activeMainCategory from "./activeMainCategory";
import activeSubCategory from "./activeSubCategory";

import posts from './readItReducers/postsReducer'
import categories from './readItReducers/categoriesReducer'
import comments from './readItReducers/commentsReducer'
import authUser from './readItReducers/authUserReducer'
import navbarData from "./navbarData";


export default combineReducers({
    activeMainCategory,
    activeSubCategory,
    navbarData,
    authUser,
    posts,
    categories,
    comments,

});
