import { Typography } from "@material-ui/core";
import { FilmCard } from "../FilmCard/FilmCard";
import useStyles from "./FavoriteStyle";

export const Favorite = ({ favorite, genres }) => {
  const style = useStyles();
  return (
    <div>
      {favorite.length > 0 ? (
        <div className={style.row} >
            {favorite.map((film) => {
          return <FilmCard film={film} key={film.id} genres={genres} />;
        })}
        </div>
      ) : (
        <div className={style.epmtyList}>
          <Typography variant="h3">List is empty</Typography>
        </div>
      )}
    </div>
  );
};
