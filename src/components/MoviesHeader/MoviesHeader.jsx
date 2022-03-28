import React from 'react'
import PageDescription from "../PageDescription";
import MoviesLogo from "../MoviesLogo";
import './moviesHeader.scss'

const MoviesHeader = () => {
    return (
        <div className={'filmsSectionHeader'}>
            <PageDescription pageLogo={<MoviesLogo />} title={'Xepelin Movie Database'}
                description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac accumsan odio. Quisque et felis id magna ultricies.'} />
        </div>
    )
}

export default MoviesHeader