import { FilmCard } from "../FilmCard/FilmCard";
import { Paginator } from "../Paginator/Paginator";
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
      {/* {props.searchResult.results ? (
        <div>
          <div className={style.row}>
            {props.searchResult.results.map((film) => {
              return (
                <div>
                  <FilmCard key={film.id} film={film} genres={props.genres} />
                </div>
              );
            })}
          </div>
          {props.searchResult.results.length > 0 &&
            <div className={style.paginator}>
            <Paginator
              count={props.totalPages}
              page={props.page}
              hadleChange={props.hadleChange}
            />
          </div>
          }
        </div>
      ) : (
        <div>NOTHING</div>
      )} */}
      {props.searchResult.length === 0 ? (
        <div>
          {props.popularFilms.results && (
            <div>
              <div className={style.row}>
                {props.popularFilms.results.map((film) => {
                  return (
                    <div>
                      <FilmCard
                        key={film.id}
                        film={film}
                        genres={props.genres}
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
          )}
        </div>
      ) : (
        <div className={style.row} >
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
