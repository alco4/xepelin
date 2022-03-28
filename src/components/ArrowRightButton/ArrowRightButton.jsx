import React from 'react'
import PropTypes from "prop-types";
import './arrowRightButton.scss'
import arrowRightIco from '../../assets/icons/arrowRightIco.svg'

const ArrowRightButton = ({ handleOnClick }) => {
    return (
        <span onClick={handleOnClick} className={'arrowRightButtonContainer'}>
            <img className={'arrowRight'} src={arrowRightIco} alt="arrowRightIco" />
        </span>
    )
}

ArrowRightButton.prototype = {
    handleOnClick: PropTypes.func.isRequired
}

export default ArrowRightButton