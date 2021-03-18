import { FilmCard } from "../FilmCard/FilmCard"
import useStyles from "./FavoriteStyle"

export const Favorite = ({favorite, genres}) => {
    const style = useStyles()
    return (
        <div className={style.row} >
            {favorite.length > 0 &&
                favorite.map ((film) => {
                    return (
                        <FilmCard film={film} key={film.id} genres={genres} />
                    )
                })
            }
        </div>
    )
}