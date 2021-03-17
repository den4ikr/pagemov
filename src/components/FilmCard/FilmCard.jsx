import { Card, CardContent, CardMedia, Typography } from "@material-ui/core"
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { NavLink } from "react-router-dom";
import useStyles from "./FilmCardStyle"

export const FilmCard = ({film, genres}) => {
    const style = useStyles()
    const filmGenres = []

    for (let i = 0; i < film.genre_ids.length; i++) {
         for (let j = 0; j < genres.length; j++) {
             if (film.genre_ids[i] === genres[j].id) {
                filmGenres.push (genres[j].name)
             } 
         }
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
                    <AddCircleIcon className={style.addIcon} />
                </div>
                <Typography className={style.genre} >
                    Genres: {filmGenres.map ((genre, index) => genre).join(",")}
                </Typography>
            </CardContent>
        </Card>
    )
}