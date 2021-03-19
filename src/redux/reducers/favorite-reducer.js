import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  SET_FAVORITE,
  SET_IS_FAVORITE,
} from "../../constants";

const initialState = {
  favorite: [],
  isFavorite: false,
};

export const FavoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FAVORITE:
      return { ...state, favorite: action.favorite };
    case ADD_FAVORITE:
      return {
        ...state,
        favorite: [action.item, ...state.favorite],
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorite: [...state.favorite.filter((film) => film.id !== action.id)],
      };
    case SET_IS_FAVORITE:
      return {
        ...state,
        isFavorite: !state.isFavorite,
      };
    default:
      return state;
  }
};
