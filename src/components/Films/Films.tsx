import { NavLink } from 'react-router-dom'
import { IFilmCard, IStorState } from '../../types'
import './index.scss'
import { Film } from './Film/Film'
import { FilmCard } from './FilmCard'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { loadFilmCards } from '../../redux/action-creators'

export const Films = () => {
    const filmCards = useSelector((state: IStorState) => state.films.filmCards);
    const currentPage = useSelector((state: IStorState) => state.films.currentPage);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadFilmCards({ currentPage }))
    }, [])
    return (
        <div className='film-cards'>
            {filmCards.map(x => <FilmCard Poster={x.Poster} Title={x.Title} Type={x.Type} imdbID={x.imdbID} Year={x.Year}/>)}
        </div>
    )
}