import { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Favorite } from "../../components/Favorite/Favorite";
import { getGenres } from "../../redux/actions/popular-action";
import { getFavorite } from "../../redux/actions/favorite-action";

const FavoriteContainer = (props) => {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.popular.genres);
  useEffect(() => {
    dispatch(getGenres());
    dispatch(getFavorite());
  }, []);
  return <Favorite favorite={props.favorite} genres={genres} />;
};

let mapStateToProps = (state) => {
  return {
    favorite: state.favorite.favorite,
  };
};

export default connect(mapStateToProps)(FavoriteContainer);
