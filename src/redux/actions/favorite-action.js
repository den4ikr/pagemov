import { ADD_FAVORITE,REMOVE_FAVORITE } from "../../constants"

export const addFavorite = (item) => ({type: ADD_FAVORITE, item})
export const removeFavorite = (id) => ({type: REMOVE_FAVORITE, id})