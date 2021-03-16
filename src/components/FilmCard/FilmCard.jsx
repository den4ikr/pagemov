import { Card, CardContent, CardMedia, Typography } from "@material-ui/core"
import AddCircleIcon from '@material-ui/icons/AddCircle';
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
            <CardMedia className={style.poster} alt="Poster" image={`https://image.tmdb.org/t/p/w300${film.poster_path}`} />
            <CardContent>
                <div className={style.subRow} >
                    <Typography className={style.title} >
                        {film.original_title}
                    </Typography>
                    <AddCircleIcon className={style.addIcon} />
                </div>
                <Typography className={style.title} >
                    Genres: {filmGenres.map ((genre, index) => <span key={index} >{genre}</span>)}
                </Typography>
            </CardContent>
        </Card>
    )
}