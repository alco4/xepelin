import React from 'react'
import PropTypes from "prop-types";
import AddFavorites from '../AddFavorites';
import closeIcon from '../../assets/icons/closeIcon.svg';
import './modal.scss'

const Modal = ({ imageUrl, title, description, handleClickClose }) => {
    return (
        <div className={'modalOverlay'}>
            <div className={'modalContainer'} >
                <img className={'modalClose'} onClick={handleClickClose} src={closeIcon} alt="closeIcon" />
                <img className={'modalImage'} src={imageUrl} alt="" />
                <p className={'modalTitle'}>{title}</p>
                <div className={'modalAction'}>
                    <AddFavorites />
                </div>
                <div className={'modalDescription'}>{description}</div>
            </div>
        </div>
    )
}

Modal.prototype = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    handleClickClose: PropTypes.func.isRequired
}
export default Modal
