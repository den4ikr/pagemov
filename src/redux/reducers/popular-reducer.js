import { SET_POPULAR_FILMS, SET_GENRES } from "../../constants";

const initialState = {
  popularFilms: [],
  genres: [],
};

export const PopularReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POPULAR_FILMS:
      return { ...state, popularFilms: action.popularFilms };
    case SET_GENRES:
      return { ...state, genres: action.genres };
    default:
      return state;
  }
};
