import { Popular } from "../../components/Popular/Popular"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPopularFilms, getGenres } from '../../redux/actions/popular-action'
import { getResult } from "../../redux/actions/search-action"
import { useState } from "react"

export const PopularContainer = () => {
    const dispatch = useDispatch()
    const popularFilms = useSelector(state => state.popular.popularFilms)
    const genres = useSelector(state => state.popular.genres)
    const searchResult = useSelector(state => state.search.result)
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState("")
    useEffect (() => {
        dispatch (getPopularFilms(page))
        dispatch (getGenres())
    },[])
    const hadleChange = (event, value) => {
        setPage (value)
        dispatch (getPopularFilms(value))
    }
    const onSearchChange = (event) => {
        setSearch(event.target.value)
    }
    const onSearch = (event) => {
        if (event.key === "Enter") {
            dispatch (getResult(search))
            setSearch("")
        }
    }

    
    return (
        <Popular popularFilms={popularFilms} genres={genres} page={page} hadleChange={hadleChange} 
        search={search} onSearchChange={onSearchChange} onSearch={onSearch} searchResult={searchResult} />
    )
}

//searchResult={Object.keys(searchResult).length ? searchResult : popularFilms}