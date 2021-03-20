import { API } from "../../Api/api";
import { SET_FILM_PAGE_DATA, SET_RECOMMENDATIONS } from "../../constants";

const setFilmPageData = (filmPageData) => ({
  type: SET_FILM_PAGE_DATA,
  filmPageData,
});
export const getFilmPageData = (movieId) => async (dispatch) => {
  const response = await API.getFilmData(movieId);
  dispatch(setFilmPageData(response.data));
};

const setRecommendations = (recommendations) => ({
  type: SET_RECOMMENDATIONS,
  recommendations,
});
export const getRecommendations = (movieId) => async (dispatch) => {
  const response = await API.getRecommendations(movieId);
  dispatch(setRecommendations(response.data.results));
};
