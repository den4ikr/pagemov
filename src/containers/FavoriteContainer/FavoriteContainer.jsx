import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Favorite } from "../../components/Favorite/Favorite";
import { getGenres } from "../../redux/actions/popular-action";
import { getFavorite } from "../../redux/actions/favorite-action";

export const FavoriteContainer = (props) => {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.popular.genres);
  const favorite = useSelector((state) => state.favorite.favorite)
  useEffect(() => {
    dispatch(getGenres());
    dispatch(getFavorite());
  }, []);
  return <Favorite favorite={favorite} genres={genres} />;
};

