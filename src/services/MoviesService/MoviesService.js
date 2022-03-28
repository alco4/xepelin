import axios from "axios";
import Movie from "../../models/Movie";
import MovieDetail from "../../models/MovieDetail";

class MoviesService {
    static async getTopRatedMovies(page) {
        const resultList = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=e08815ebb9a68b5816a9e3ae26b751e1&language=es-ES&page=${page}`)
            .then(res => res?.data?.results.map(movie => Movie.fromJson(movie)))
        return resultList
    }

    static async getPopularMovies(page) {
        const resultList = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=e08815ebb9a68b5816a9e3ae26b751e1&language=es-ES&page=${page}`)
            .then(res => res?.data?.results.map(movie => Movie.fromJson(movie)))
        return resultList
    }

    static async getUpcomingMovies(page) {
        const resultList = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=e08815ebb9a68b5816a9e3ae26b751e1&language=es-ES&page=${page}`)
            .then(res => res?.data?.results.map(movie => Movie.fromJson(movie)))
        return resultList
    }

    static async getMovieInformation(movieId) {
        const movieDetail = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=e08815ebb9a68b5816a9e3ae26b751e1&language=es-ES&page=1`)
            .then(res => MovieDetail.fromJson(res?.data))
        return movieDetail
    }
}

export default MoviesService
