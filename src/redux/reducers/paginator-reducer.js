//import { SET_CURRENT_PAGE } from "../../constants";

const initialState = {
    currentPage: 1,
}

export const PaginatorReducer = (state = initialState, action) => {
    switch(action.type) {
        // case SET_CURRENT_PAGE:
        //     debugger
        //     return {...state, currentPage: action.currentPage}
        default:
            return state;
    }
}