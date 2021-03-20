import { API } from "../../Api/api";
import { SET_POPULAR_FILMS, SET_GENRES } from "../../constants";

const setPopularFilms = (popularFilms) => ({
  type: SET_POPULAR_FILMS,
  popularFilms,
});
export const getPopularFilms = (currentPage) => async (dispatch) => {
  const response = await API.getPopularFilms(currentPage);
  dispatch(setPopularFilms(response.data));
};

const setGenres = (genres) => ({ type: SET_GENRES, genres });
export const getGenres = () => async (dispatch) => {
  const response = await API.getGenres();
  dispatch(setGenres(response.data.genres));
};
