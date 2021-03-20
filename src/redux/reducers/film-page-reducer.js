import { SET_FILM_PAGE_DATA, SET_RECOMMENDATIONS } from "../../constants";

const initialState = {
  filmPageData: {},
  recommendations: [],
};

export const FilmPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILM_PAGE_DATA:
      return { ...state, filmPageData: action.filmPageData };
    case SET_RECOMMENDATIONS:
      return { ...state, recommendations: action.recommendations };
    default:
      return state;
  }
};
