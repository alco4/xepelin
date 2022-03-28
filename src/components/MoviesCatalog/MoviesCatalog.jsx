import React from "react";
import PropTypes from "prop-types";
import Category from "../Category";
import "./moviesCatalog.scss";

const MoviesCatalog = ({
                           popularMovies, topRatedMovies, upcomingMovies, handleClickMovieCard, getTopRatedMoviesPage, getPopularMoviesPage, getUpcomingMoviesPage
                       }) => {
    return (<>
        {topRatedMovies && topRatedMovies.length > 0 && (
            <div className={"topRatedCategory"}>
                <Category
                    title={"Favoritas"}
                    description={"Donec eu lobortis"}
                    category={topRatedMovies}
                    handleClickCard={handleClickMovieCard}
                    getPage={getTopRatedMoviesPage}
                />
            </div>)
        }
        {popularMovies && popularMovies.length > 0 && (
            <div className={"popularCategory"}>
                <Category
                    title={"Más populares"}
                    description={"Nullam sapien arcu tempor"}
                    category={popularMovies}
                    handleClickCard={handleClickMovieCard}
                    getPage={getPopularMoviesPage}
                />
            </div>)
        }
        {upcomingMovies && upcomingMovies.length > 0 && (
            <div className={"upcomingCategory"}>
                <Category
                    title={"Próximos eventos"}
                    description={"Morbi ac turpis lacus"}
                    category={upcomingMovies}
                    handleClickCard={handleClickMovieCard}
                    getPage={getUpcomingMoviesPage}
                />
            </div>)
        }
    </>);
};

MoviesCatalog.defaultProps = {
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    handleClickMovieCard: () => {
    },
    getTopRatedMoviesPage: () => {
    },
    getPopularMoviesPage: () => {
    },
    getUpcomingMoviesPage: () => {
    },
};

MoviesCatalog.prototype = {
    popularMovies: PropTypes.array,
    topRatedMovies: PropTypes.array,
    upcomingMovies: PropTypes.array,
    handleClickMovieCard: PropTypes.func,
    getTopRatedMoviesPage: PropTypes.func,
    getPopularMoviesPage: PropTypes.func,
    getUpcomingMoviesPage: PropTypes.func,
};

export default MoviesCatalog;
