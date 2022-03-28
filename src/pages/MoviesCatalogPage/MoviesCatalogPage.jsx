import React, { useEffect } from 'react'
import shallow from 'zustand/shallow'
import useStore from "../../stores/store";
import FilmsHeader from "../../components/FilmsHeader";
import './filmsCatalogPage.scss'

const FilmsCatalogPage = () => {
    const popularMovies = useStore(state => state.popularMovies, shallow)
    const getPopularMovies  = useStore((state) => state.getPopularMovies)

    useEffect(()=>{
        getPopularMovies()
    } ,[])


    return(
        <div className={'homeContainer'}>
            <FilmsHeader />
            <p className={'colorRed'}>We have {popularMovies.length}</p>
            <ul>
                {popularMovies.map( p=>(
                    <li>{p}</li>
                ))}
            </ul>
        </div>
    )
}

export default FilmsCatalogPage