import React from 'react'
import PropTypes from "prop-types";
import './arrowLeftButton.scss'
import arrowRightIco from '../../assets/icons/arrowLeftIco.svg'

const ArrowLeftButton = ({ handleOnClick }) => {
    return (
        <span onClick={handleOnClick} className={'arrowLeftButtonContainer'}>
            <img className={'arrowLeft'} src={arrowRightIco} alt="arrowLeftIco" />
        </span>
    )
}

ArrowLeftButton.prototype = {
    handleOnClick: PropTypes.func.isRequired
}

export default ArrowLeftButton