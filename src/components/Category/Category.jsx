import React, {useCallback, useState, useEffect} from 'react'
import PropTypes from 'prop-types';
import Card from '../Card';
import ArrowLeftButton from '../ArrowLeftButton';
import ArrowRightButton from '../ArrowRightButton';
import smallArrow from '../../assets/icons/smallArrow.svg';
import {MOVIES_CATEGORY_LENGTH} from "../../constants";
import './moviesCategory.scss'

const renderCategory = (category, index, handleClickMovieCard) => category.slice(index, index+MOVIES_CATEGORY_LENGTH).map(({id, title, date, imageUrl})=> {
    return(<Card key={id} title={title} date={date} imageUrl={imageUrl} handleClickCard={()=>handleClickMovieCard(id)}/>)
})

const MoviesCategory = ({title, description, movieCategory, handleClickMovieCard}) => {
    const [indexCategory, setIndexCategory] = useState(0)
    const [movies, setMovies] = useState(null)

    useEffect(()=> setMovies(renderCategory(movieCategory, indexCategory, handleClickMovieCard)) ,[movieCategory, indexCategory])

    const handleCategoryPrev = useCallback(() => {
        setIndexCategory(prevIndex => {
            if(prevIndex===0) {
                return prevIndex
            }
            return prevIndex - 1
        })
    },[indexCategory])

    const handleCategoryNext = useCallback(() => {
        setIndexCategory(prevIndex => {
            if(prevIndex===movieCategory.length-MOVIES_CATEGORY_LENGTH) {
                return prevIndex
            }
            return prevIndex + 1
        })
    },[indexCategory])

    return(
        <div className={'moviesCategoryContainer'}>
            <div className={'categoryTitle'}>{title} <img src={smallArrow} alt="arrowMenu"/></div>
            <div className={'categoryDescription'}>{description}</div>
            {indexCategory !== 0 && (<ArrowLeftButton handleOnClick={handleCategoryPrev}/>)}
            <div className={'moviesContainer'}>{movies}</div>
            {indexCategory !== movieCategory.length-MOVIES_CATEGORY_LENGTH && (<ArrowRightButton handleOnClick={handleCategoryNext}/>)}
        </div>
    )
}

MoviesCategory.defaultProps = {
    title: null,
    description: null,
    handleClickMovieCard: ()=>{},
}

MoviesCategory.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    handleClickMovieCard: PropTypes.func,
    movieCategory: PropTypes.array.isRequired
}

export default MoviesCategory