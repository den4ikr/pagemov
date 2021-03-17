import { applyMiddleware, combineReducers, createStore } from "redux";
import { PopularReducer } from "./reducers/popular-reducer";
import thunkMiddleWare  from "redux-thunk"
import { SearchReducer } from "./reducers/search-reducer";
import { FilmPageReducer } from "./reducers/film-page-reducer"
import { FavoriteReducer } from "./reducers/favorite-reducer";




const rootReducer = combineReducers({
    popular: PopularReducer,
    search: SearchReducer,
    filmPageData: FilmPageReducer,
    favorite: FavoriteReducer,
})

export const store = createStore (rootReducer, applyMiddleware(thunkMiddleWare))