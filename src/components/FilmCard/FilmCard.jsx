import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import DeleteIcon from "@material-ui/icons/Delete";
import { NavLink } from "react-router-dom";
import useStyles from "./FilmCardStyle";
import {
  removeFavorite,
  getIsFavorite,
} from "../../redux/actions/favorite-action";
import { useDispatch } from "react-redux";
import { addToFavourites, isFilmFavourite } from "../../services/localStorage";

export const FilmCard = ({ film, genres }) => {
  const dispatch = useDispatch();
  const style = useStyles();
  const [filmGenres, setFilmGenres] = useState([]);
  const isFavorite = isFilmFavourite(film.id);

  useEffect(() => {
    let films = [];
    for (let i = 0; i < film.genre_ids.length; i++) {
      for (let j = 0; j < genres.length; j++) {
        if (film.genre_ids[i] === genres[j].id) {
          films.push(genres[j].name);
        }
      }
    }
    setFilmGenres(films);
  }, []);

  const addFavoriteFilm = () => {
    addToFavourites(film);
    dispatch(getIsFavorite(film.id));
  };
  const deleteFavorite = () => {
    dispatch(removeFavorite(film.id));
    dispatch(getIsFavorite(film.id));
  };

  return (
    <Card className={style.card}>
      <NavLink to={`/filmpage/${film.id}`}>
        <CardMedia
          className={style.poster}
          alt="Poster"
          image={`https://image.tmdb.org/t/p/w300${film.poster_path}`}
        />
      </NavLink>
      <CardContent>
        <div className={style.subRow}>
          <Typography className={style.title}>{film.original_title}</Typography>
          {isFavorite ? (
            <IconButton onClick={deleteFavorite}>
              <DeleteIcon />
            </IconButton>
          ) : (
            <IconButton onClick={addFavoriteFilm}>
              <AddCircleIcon className={style.addIcon} />
            </IconButton>
          )}
        </div>
        <Typography className={style.genre}>
          Genres: {filmGenres.map((genre, index) => genre).join(",")}
        </Typography>
      </CardContent>
    </Card>
  );
};
