import { setFavorite } from "../redux/actions/favorite-action"

export const getFavouriteList = () => {
    return JSON.parse(localStorage.getItem("favourites")) || []
  };
  
  export const isFilmFavourite = (id) => {
    const films = getFavouriteList();
    return !!films.find((f) => f.id === id);
  };
  
  export const addToFavourites = async (film) => {
    const films = getFavouriteList();
    const newFilms = [...films, film];
    await setFavorite(newFilms)
    await localStorage.setItem("favourites", JSON.stringify(newFilms));
    return newFilms;
  };
  
  export const removeFromFavourites = async (id) => {
    const films = getFavouriteList();
    const newFilms = films.filter((f) => f.id !== id);
    await setFavorite(newFilms)
    await localStorage.setItem("favourites", JSON.stringify(newFilms));
    return newFilms;
  };