import React from 'react'
import PropTypes from "prop-types";
import './movieCard.scss'

const MovieCard = ({title, date, imageUrl, handleClickMovieCard}) => {
    return(
        <div className={'movieCardContainer'} onClick={handleClickMovieCard}>
            <img className={'imageMovie'} src={imageUrl} alt="imageMovie"/>
            <div className={'movieTitle'}>{title}</div>
            <div>{date}</div>
        </div>
    )
}

MovieCard.prototype = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    handleClickMovieCard: PropTypes.func.isRequired
}
export default MovieCard
