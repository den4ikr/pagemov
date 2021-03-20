import axios from "axios";

const instance = axios.create({
  baseURL: "http://api.themoviedb.org/3/",
});

export const API = {
  getPopularFilms(currentPage) {
    return instance.get(
      `movie/popular/?api_key=59b515f14ca7817fa52949d84c435157&page=${currentPage}`
    );
  },
  getGenres() {
    return instance.get(
      `genre/movie/list?api_key=59b515f14ca7817fa52949d84c435157&language=en-US`
    );
  },
  getSearch(search) {
    return instance.get(
      `search/movie?api_key=59b515f14ca7817fa52949d84c435157&language=en-US&query=${search}&page=1&include_adult=false`
    );
  },
  getFilmData(movieId) {
    return instance.get(
      `movie/${movieId}?api_key=59b515f14ca7817fa52949d84c435157&language=en-US`
    );
  },
  getRecommendations(movieId) {
    return instance.get(
      `movie/${movieId}/recommendations?api_key=59b515f14ca7817fa52949d84c435157&language=en-US&page=1`
    );
  },
};
