import { FilmCard } from "../FilmCard/FilmCard";
import { Paginator } from "../Paginator/Paginator";
import { Preloader } from "../Preloader/Preloader";
import { Search } from "../Search/Search";
import useStyles from "./PopularStyle";

export const Popular = (props) => {
  const style = useStyles();
  return (
    <>
      <Search
        search={props.search}
        onSearchChange={props.onSearchChange}
        onSearch={props.onSearch}
      />
      {props.searchResult.length === 0 ? (
        <div>
          {props.popularFilms.results ? (
            <div>
              <div className={style.row}>
                {props.popularFilms.results.map((film) => {
                  return (
                    <div>
                      <FilmCard
                        key={film.id}
                        film={film}
                        genres={props.genres}
                        isFavorite={props.isFavorite}
                      />
                    </div>
                  );
                })}
              </div>
              <div className={style.paginator}>
                <Paginator
                  count={props.popularFilms.total_pages}
                  page={props.page}
                  hadleChange={props.hadleChange}
                />
              </div>
            </div>
          ) : (
            <Preloader />
          )}
        </div>
      ) : (
        <div className={style.row}>
          {props.searchResult.results.map((film) => {
            return (
              <div>
                <FilmCard key={film.id} film={film} genres={props.genres} />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
