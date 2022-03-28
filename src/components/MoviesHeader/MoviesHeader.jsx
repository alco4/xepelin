import React from 'react'
import './filmsHeader.scss'
import MoviesLogo from "../MoviesLogo";
import SectionDescription from "../SectionDescription";
const FilmsHeader = () => {
    return(
            <div className={'filmsSectionHeader'}>
                <SectionDescription sectionLogo={<MoviesLogo />} title={'Xepelin Movie Database'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac accumsan odio. Quisque et felis id magna ultricies.'}/>
            </div>
    )
}

export default FilmsHeader