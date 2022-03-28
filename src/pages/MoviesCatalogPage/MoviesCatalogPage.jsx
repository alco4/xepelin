import React, {useEffect, useCallback, useState} from 'react'
import shallow from 'zustand/shallow'
import useStore from "../../stores/MoviesStore";
import MoviesHeader from "../../components/MoviesHeader";
import MoviesCatalog from "../../components/MoviesCatalog";
import ErrorMessage from "../../components/ErrorMessage";
import MovieInformationModal from "../../components/MovieInformationModal";
import "./moviesCatalogPage.scss";

const MoviesCatalogPage = () => {
    const catalogError = useStore(state => state.catalogError, shallow)
    const popularMovies = useStore(state => state.popularMovies, shallow)
    const topRatedMovies = useStore(state => state.topRatedMovies, shallow)
    const upcomingMovies = useStore(state => state.upcomingMovies, shallow)
    const movieDetail = useStore(state => state.movieDetail, shallow)
    const getPopularMovies = useStore((state) => state.getPopularMovies)
    const getTopRatedMovies = useStore((state) => state.getTopRatedMovies)
    const getUpcomingMovies = useStore((state) => state.getUpcomingMovies)
    const getMovieInformation = useStore((state) => state.getMovieInformation)
    const setTopRatedMoviesPage = useStore((state) => state.setTopRatedMoviesPage)
    const setPopularMoviesPage = useStore((state) => state.setPopularMoviesPage)
    const setUpcomingMoviesPage = useStore((state) => state.setUpcomingMoviesPage)
    const topRatedMoviesPage = useStore((state) => state.topRatedMoviesPage)

    const [isOpenInformationModal, setOpenInformationModal] = useState(false)

    useEffect(() => {
        getPopularMovies().then()
        getTopRatedMovies().then()
        getUpcomingMovies().then()
    }, [])

    const handleOnClickMovieCard = useCallback((movieId) => {
        getMovieInformation(movieId).then(() => setOpenInformationModal(true))
    }, [])

    const handleOnClickCloseModal = useCallback((movieId) => {
        setOpenInformationModal(false)
    }, [])

    const getTopRatedMoviesPage = useCallback(() => {
        setTopRatedMoviesPage()
        getTopRatedMovies().then()
    }, [])

    const getPopularMoviesPage = useCallback(() => {
        setPopularMoviesPage()
        getPopularMovies().then()
    }, [])

    const getUpcomingMoviesPage = useCallback(() => {
        setUpcomingMoviesPage()
        getUpcomingMovies().then()
    }, [])


    return (
        <div className={'MoviesCatalogPageContainer'}>
            {isOpenInformationModal &&
            <MovieInformationModal detail={movieDetail} handleClickCloseModal={handleOnClickCloseModal}/>}
            <MoviesHeader/>
            {catalogError ? <ErrorMessage message={catalogError}/> :
                <MoviesCatalog popularMovies={popularMovies} topRatedMovies={topRatedMovies}
                               upcomingMovies={upcomingMovies} handleClickMovieCard={handleOnClickMovieCard}
                               getTopRatedMoviesPage={getTopRatedMoviesPage} getPopularMoviesPage={getPopularMoviesPage}
                               getUpcomingMoviesPage={getUpcomingMoviesPage}/>}
        </div>
    )
}

export default MoviesCatalogPage