import create from 'zustand'
import axios from 'axios';
import Movie from "../models/Movie";

const errorGenerico = 'Ha ocurrido un error, por favor vuelva a intentarlo en unos instantes.'

const useStore = create((set)=>({
    popularMovies: [],
    topRatedMovies: [],
    upcomingMovies: [],
    isLoadingPopularMovies: false,
    isLoadingTopRatedMovies: false,
    isLoadingUpcomingMovies: false,
    errorCatalogo: null,
    getPopularMovies: () => {
        set(()=>({isLoadingPopularMovies: true}))
        try{
            axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=e08815ebb9a68b5816a9e3ae26b751e1&language=en-US&page=1`)
                .then(res => {
                    const resultList = res?.data?.results.map(movie => Movie.fromJson(movie))
                    set(()=>({isLoadingPopularMovies: false, popularMovies: [...resultList]}))
                })
        } catch (e) {
            set(()=>({errorCatalogo: errorGenerico}))
        }
    },
    getTopRatedMovies: () => {
        set(()=>({isLoadingTopRatedMovies: true}))
        try{
            axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=e08815ebb9a68b5816a9e3ae26b751e1&language=en-US&page=1`)
                .then(res => {
                    const resultList = res?.data?.results.map(movie => Movie.fromJson(movie))
                    set(()=>({isLoadingTopRatedMovies: false,topRatedMovies: [...resultList]}))
                })
        } catch (e) {
            set(()=>({errorCatalogo: errorGenerico}))
        }
    },
    getUpcomingMovies: () => {
        set(()=>({isLoadingUpcomingMovies: true}))
        try{
            axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=e08815ebb9a68b5816a9e3ae26b751e1&language=en-US&page=1`)
                .then(res => {
                    const resultList = res?.data?.results.map(movie => Movie.fromJson(movie))
                    set(()=>({isLoadingUpcomingMovies: false, upcomingMovies: [...resultList]}))
                })
        } catch (e) {
            set(()=>({errorCatalogo: errorGenerico}))
        }
    }
}))

export default useStore