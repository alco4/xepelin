import React from 'react'
import './movieLogo.scss'
import filmIco from '../../assets/icons/filmIco.svg'

const MoviesLogo = () => {
    return (
        <div className={'containerLogo'}>
            <img src={filmIco} alt="filmIco" />
        </div>
    )
}

export default MoviesLogo