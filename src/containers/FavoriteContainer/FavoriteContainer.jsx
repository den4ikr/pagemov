import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Favorite } from "../../components/Favorite/Favorite"
import { setFavorite } from "../../redux/actions/favorite-action"
import { getGenres } from "../../redux/actions/popular-action"
import { getFavouriteList, isFilmFavourite } from "../../services/localStorage"
export const FavoriteContainer = () => {
    const dispatch = useDispatch()
    //const fav = useSelector(state => state.favorite.favorite)
    const genres = useSelector(state => state.popular.genres)
    const favorite = getFavouriteList()
    dispatch(setFavorite(favorite))
    useEffect(() => {
        dispatch(getGenres())
    },[])
    return (
        <Favorite favorite={favorite} genres={genres} />
    )
}