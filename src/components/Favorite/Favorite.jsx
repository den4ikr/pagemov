import { FilmCard } from "../FilmCard/FilmCard"

export const Favorite = ({favorite, genres}) => {
    return (
        <div>
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