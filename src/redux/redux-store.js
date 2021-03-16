import { applyMiddleware, combineReducers, createStore } from "redux";
import { PopularReducer } from "./reducers/popular-reducer";
import thunkMiddleWare  from "redux-thunk"
import { PaginatorReducer } from "./reducers/paginator-reducer";

const rootReducer = combineReducers({
    popular: PopularReducer,
    paginator: PaginatorReducer,
})

export const store = createStore (rootReducer, applyMiddleware(thunkMiddleWare))