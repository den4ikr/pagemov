import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import { FilmPage } from "../../components/FilmPage/FilmPage";
import {
  getFilmPageData,
  getRecommendations,
} from "../../redux/actions/film-page-action";
import { getGenres } from "../../redux/actions/popular-action";
import {
  getIsFavorite,
  addFavorite,
} from "../../redux/actions/favorite-action";

const FilmPageContainer = (props) => {
  const MOVIE_ID = props.match.params.movieId;
  const dispatch = useDispatch();
  const filmPageData = useSelector((state) => state.filmPageData.filmPageData);
  const recommendations = useSelector(
    (state) => state.filmPageData.recommendations
  );
  const genres = useSelector((state) => state.popular.genres);
  const isFavorite = useSelector((state) => state.favorite.isFavorite);

  useEffect(() => {
    dispatch(getFilmPageData(MOVIE_ID));
    dispatch(getRecommendations(MOVIE_ID));
    dispatch(getGenres());
  }, []);
  const addFavoriteFilm = () => {
    dispatch(addFavorite(filmPageData));
    dispatch(getIsFavorite(filmPageData.id));
  };
  return (
    <FilmPage
      filmPageData={filmPageData}
      recommendations={recommendations}
      genres={genres}
      addFavoriteFilm={addFavoriteFilm}
      isFavorite={isFavorite}
    />
  );
};

export default withRouter(FilmPageContainer);
