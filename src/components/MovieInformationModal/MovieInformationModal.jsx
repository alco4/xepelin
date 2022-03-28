import React from 'react'
import PropTypes from "prop-types";
import Modal from '../Modal';

const MovieInformationModal = ({ detail, handleClickCloseModal }) => {
    const { imageUrl, title, description } = detail
    return <Modal imageUrl={imageUrl} title={title} description={description} handleClickClose={handleClickCloseModal} />
}

MovieInformationModal.prototype = {
    detail: PropTypes.object.isRequired, handleClickClose: PropTypes.func.isRequired
}
export default MovieInformationModal
