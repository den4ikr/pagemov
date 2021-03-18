import { SET_FAVORITE} from "../../constants"

const initialState = {
    favorite: []
}

export const FavoriteReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_FAVORITE:
            debugger
            return {...state, favorite: action.favorite}
        default:
            return state
    }
}