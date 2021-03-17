import { Card, CardContent, CardMedia, IconButton, Typography } from "@material-ui/core"
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { NavLink } from "react-router-dom";
import useStyles from "./FilmCardStyle"
import { addFavorite, removeFavorite } from '../../redux/actions/favorite-action'
import { useDispatch } from "react-redux";

export const FilmCard = ({film, genres}) => {
    const dispatch = useDispatch()
    const style = useStyles()
    const filmGenres = []

    for (let i = 0; i < film.genre_ids.length; i++) {
         for (let j = 0; j < genres.length; j++) {
             if (film.genre_ids[i] === genres[j].id) {
                filmGenres.push (genres[j].name)
             } 
         }
     }

     const addFavoriteFilm = () => {
        dispatch(addFavorite(film))
     }
     const deleteFavorite = () => {
         dispatch(removeFavorite(film.id))
         debugger
     }

    return (
        <Card className={style.card} >
            <NavLink to= {`/filmpage/${film.id}`} >
                <CardMedia className={style.poster} alt="Poster" image={`https://image.tmdb.org/t/p/w300${film.poster_path}`} />
            </NavLink>
            <CardContent>
                <div className={style.subRow} >
                    <Typography className={style.title} >
                        {film.original_title}
                    </Typography>
                    <IconButton onClick = {addFavoriteFilm} > 
                            <AddCircleIcon className={style.addIcon} />
                    </IconButton>
                    <IconButton onClick = {deleteFavorite} > 
                            <Typography>-</Typography>
                    </IconButton>
                </div>
                <Typography className={style.genre} >
                    Genres: {filmGenres.map ((genre, index) => genre).join(",")}
                </Typography>
            </CardContent>
        </Card>
    )
}