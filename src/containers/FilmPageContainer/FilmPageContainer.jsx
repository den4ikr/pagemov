import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { withRouter } from "react-router"
import { FilmPage } from "../../components/FilmPage/FilmPage"
import { getFilmPageData, getRecommendations } from "../../redux/actions/film-page-action"
import { getGenres } from "../../redux/actions/popular-action"

const FilmPageContainer = (props) => {
    const MOVIE_ID = props.match.params.movieId
    const dispatch = useDispatch()
    const filmPageData = useSelector(state => state.filmPageData.filmPageData)
    const recommendations = useSelector(state => state.filmPageData.recommendations)
    const genres = useSelector(state => state.popular.genres)
    useEffect(() => {
        dispatch(getFilmPageData (MOVIE_ID))
        dispatch(getRecommendations(MOVIE_ID))
        dispatch(getGenres())
    },[])
    return (
        <FilmPage filmPageData={filmPageData} recommendations={recommendations} genres={genres} />
    )
}

export default withRouter(FilmPageContainer)