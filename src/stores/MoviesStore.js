import create from 'zustand'
import MoviesService from "../services/MoviesService";

const genericError = 'Ha ocurrido un error, por favor vuelva a intentarlo en unos instantes...'

const useStore = create((set, get) => ({
    popularMovies: [],
    topRatedMovies: [],
    upcomingMovies: [],
    movieDetail: null,
    catalogError: null,
    topRatedMoviesPage: 1,
    popularMoviesPage: 1,
    upcomingMoviesPage: 1,
    setTopRatedMoviesPage: () => {
        const topRatedMoviesPage = get().topRatedMoviesPage
        set(() => ({
            topRatedMoviesPage: topRatedMoviesPage + 1
        }))
    },
    setPopularMoviesPage: () => {
        const popularMoviesPage = get().popularMoviesPage
        set(() => ({
            popularMoviesPage: popularMoviesPage + 1
        }))
    },
    setUpcomingMoviesPage: () => {
        const upcomingMoviesPage = get().upcomingMoviesPage
        set(() => ({
            upcomingMoviesPage: upcomingMoviesPage + 1
        }))
    },
    getTopRatedMovies: async () => {
        const topRatedMoviesPage = get().topRatedMoviesPage
        const topRatedMovies = get().topRatedMovies
        try {
            const resultList = await MoviesService.getTopRatedMovies(topRatedMoviesPage)
            set(() => ({
                topRatedMovies: topRatedMovies.concat(resultList)
            }))
        } catch (e) {
            set(() => ({
                catalogError: genericError
            }))
        }
    },
    getPopularMovies: async () => {
        const popularMoviesPage = get().popularMoviesPage
        const popularMovies = get().popularMovies
        try {
            const resultList = await MoviesService.getPopularMovies(popularMoviesPage)
            set(() => ({
                popularMovies: popularMovies.concat(resultList)
            }))
        } catch (e) {
            set(() => ({
                catalogError: genericError
            }))
        }
    },
    getUpcomingMovies: async () => {
        const upcomingMoviesPage = get().upcomingMoviesPage
        const upcomingMovies = get().upcomingMovies
        try {
            const resultList = await MoviesService.getUpcomingMovies(upcomingMoviesPage)
            set(() => ({
                upcomingMovies: upcomingMovies.concat(resultList)
            }))
        } catch (e) {
            set(() => ({
                catalogError: genericError
            }))
        }
    },
    getMovieInformation: async (id) => {
        try {
            const movieDetail = await MoviesService.getMovieInformation(id)
            set(() => ({
                movieDetail: movieDetail
            }))
        } catch (e) {
            set(() => ({
                catalogError: genericError
            }))
        }
    }
}))

export default useStore