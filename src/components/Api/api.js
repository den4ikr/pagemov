import axios from "axios"

// const instance = axios.create ({
//     baseURL: "https://developers.themoviedb.org/3",
//     headers: {
//         API_KEY: "59b515f14ca7817fa52949d84c435157"
//     }
// })

export const API = {
    getPopularFilms (currentPage) {
        return axios.get (`https://api.themoviedb.org/3/movie/popular/?api_key=59b515f14ca7817fa52949d84c435157&page=${currentPage}`);
    },
    getGenres () {
        return axios.get (`https://api.themoviedb.org/3/genre/movie/list?api_key=59b515f14ca7817fa52949d84c435157&language=en-US`)
    },
    getSearch (query) {
        return axios.get (`https://api.themoviedb.org/3/search/movie?api_key=59b515f14ca7817fa52949d84c435157&language=en-US&query=naruto&page=1&include_adult=false`)
    }
}