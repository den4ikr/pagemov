import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Popular } from "../../components/Popular/Popular";
import { useEffect } from "react";
import { getPopularFilms, getGenres } from "../../redux/actions/popular-action";
import { getResult } from "../../redux/actions/search-action";

export const PopularContainer = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const popularFilms = useSelector((state) => state.popular.popularFilms);
  const genres = useSelector((state) => state.popular.genres);
  const searchResult = useSelector((state) => state.search.result);
  const isFavorite = useSelector((state) => state.favorite.isFavorite);
  useEffect(() => {
    dispatch(getPopularFilms(page));
    dispatch(getGenres());
  }, []);
  const hadleChange = (event, value) => {
    setPage(value);
    dispatch(getPopularFilms(value));
    window.scroll(0, 0);
  };
  const onSearchChange = (event) => {
    setSearch(event.target.value);
  };
  const onSearch = (event) => {
    if (event.key === "Enter") {
      dispatch(getResult(search));
      setSearch("");
    }
  };

  return (
    <Popular
      popularFilms={popularFilms}
      genres={genres}
      page={page}
      hadleChange={hadleChange}
      search={search}
      onSearchChange={onSearchChange}
      onSearch={onSearch}
      searchResult={searchResult}
    />
  );
};
