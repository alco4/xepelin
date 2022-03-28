import React from 'react'
import addIcon from '../../assets/icons/addIcon.svg'
import './addFavorites.scss'

const AddFavorites = () => {
    return (
        <div className={'addFavorites'}>
            <img src={addIcon} alt={'spinnerGif'} />
            <p className={'addFavoritesText'}>Agregar a favoritas</p>
        </div>
    )
}

export default AddFavorites
