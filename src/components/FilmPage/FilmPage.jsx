import { CardContent, Typography, Card, Button } from "@material-ui/core";
import { useEffect } from "react";
import { FilmCard } from "../FilmCard/FilmCard";
import { Preloader } from "../Preloader/Preloader";
import useStyles from "./FilmPageStyle";
import { isFilmFavourite } from "../../services/localStorage";

export const FilmPage = ({
  filmPageData,
  recommendations,
  genres,
  addFavoriteFilm,
}) => {
  const style = useStyles();
  const backdropPath = `https://image.tmdb.org/t/p/original/${filmPageData.backdrop_path}`;
  const isFavorite = isFilmFavourite(filmPageData.id);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      {Object.keys(filmPageData).length > 0 ? (
        <div>
          <div>
            <div
              className={style.posterbg}
              style={{
                backgroundImage: `url(${backdropPath})`,
                width: "100%",
                height: "780px",
                backgroundRepeat: "no-repeat",
                margin: "0 auto",
                marginBottom: "100px",
                backgroundPosition: "50% 50%",
              }}
            >
              <Typography className={style.title}>
                {filmPageData.title}
              </Typography>
            </div>
            <div className={style.container}>
              <Card>
                <CardContent>
                  <div className={style.cardRow}>
                    <div className={style.info}>
                      <Typography>
                        Genres:{" "}
                        {filmPageData.genres
                          .map((genre) => genre.name)
                          .join(",")}
                      </Typography>
                      <Typography>
                        Original language: {filmPageData.original_language}
                      </Typography>
                      <Typography>
                        Popuilarity: {filmPageData.popularity}
                      </Typography>
                      <Typography>
                        Release date: {filmPageData.release_date}
                      </Typography>
                      {isFavorite ? (
                        <Typography color="primary">
                          Film added to favorite list
                        </Typography>
                      ) : (
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={addFavoriteFilm}
                        >
                          Add to favorite
                        </Button>
                      )}
                    </div>
                    <div className={style.overview}>
                      <Typography className={style.overview}>
                        {filmPageData.overview}
                      </Typography>
                    </div>
                  </div>
                </CardContent>
              </Card>
              {recommendations.length > 0 && (
                <>
                  <div className={style.recTitlte}>
                    <Typography variant="h4">Recommendation</Typography>
                  </div>
                  <div className={style.recommendationRow}>
                    {recommendations.map((film) => {
                      return (
                        <FilmCard film={film} key={film.id} genres={genres} />
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      ) : (
        <Preloader />
      )}
    </>
  );
};
