import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Favorite } from "../../components/Favorite/Favorite"
import { getGenres } from "../../redux/actions/popular-action"

export const FavoriteContainer = () => {
    const dispatch = useDispatch()
    const favorite = useSelector(state => state.favorite.favorite)
    const genres = useSelector(state => state.popular.genres)
    useEffect(() => {
        dispatch(getGenres())
    },[])
    return (
        <Favorite favorite={favorite} genres={genres} />
    )
}