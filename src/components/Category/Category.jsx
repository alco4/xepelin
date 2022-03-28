import React, {useCallback, useState, useEffect, useReducer} from 'react'
import PropTypes from 'prop-types';
import Card from '../Card';
import ArrowLeftButton from '../ArrowLeftButton';
import ArrowRightButton from '../ArrowRightButton';
import smallArrow from '../../assets/icons/smallArrow.svg';
import {CATEGORY_LENGTH} from "../../constants";
import './category.scss'

const renderCategory = (category, index, handleClickCard) => category.slice(index, index + CATEGORY_LENGTH).map(({id, title, date, imageUrl}) => {
    return (<Card key={id} title={title} date={date} imageUrl={imageUrl} handleClickCard={() => handleClickCard(id)}/>)
})

const initialState = {categoryIndex: 0};

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return {categoryIndex: state.categoryIndex + 1};
        case 'decrement':
            return {categoryIndex: state.categoryIndex - 1};
        default:
            throw new Error();
    }
}

const Category = ({title, description, category, handleClickCard, getPage}) => {
    const [cards, setCards] = useState(null)
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect( ()=> {
        if (state.categoryIndex === category.length - CATEGORY_LENGTH - 1) {
            getPage()
        }
    }, [state.categoryIndex])

    useEffect(() => setCards(renderCategory(category, state.categoryIndex, handleClickCard)), [category, state.categoryIndex])

    const prevIndex = useCallback(() => dispatch({type: 'decrement'}),[])
    const nextIndex = useCallback(() => dispatch({type: 'increment'}),[])

    return (
        <div className={'moviesCategoryContainer'}>
            <div className={'categoryTitle'}>{title} <img src={smallArrow} alt="arrowMenu"/></div>
            <div className={'categoryDescription'}>{description}</div>
            {state.categoryIndex !== 0 && (<ArrowLeftButton handleOnClick={prevIndex}/>)}
            <div className={'moviesContainer'}>{cards}</div>
            {state.categoryIndex !== category.length - CATEGORY_LENGTH && (
                <ArrowRightButton handleOnClick={nextIndex}/>)}
        </div>
    )
}

Category.defaultProps = {
    title: null,
    description: null,
    handleClickCard: () => {
    },
    getPage: () => {
    },
}

Category.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.array.isRequired,
    handleClickCard: PropTypes.func,
    getPage: PropTypes.func
}

export default Category