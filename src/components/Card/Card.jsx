import React from 'react'
import PropTypes from "prop-types";
import './card.scss'

const Card = ({ title, date, imageUrl, handleClickCard }) => {
    return (
        <div className={'cardContainer'} onClick={handleClickCard}>
            <img className={'cardImage'} src={imageUrl} alt="cardImage" />
            <div className={'cardTitle'}>{title}</div>
            <div>{date}</div>
        </div>
    )
}

Card.prototype = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    handleClickCard: PropTypes.func.isRequired
}
export default Card
