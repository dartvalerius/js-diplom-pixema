import { NavLink } from 'react-router-dom'
import { IFilmCard } from '../../types'
import './index.scss'
import { Film } from './Film/Film'
import { FilmCard } from './FilmCard'

export const Films = () => {
    const {Poster, Title, imdbID, Type, Year}: IFilmCard = {
        "Title": "Star Wars: Episode V - The Empire Strikes Back",
        "Year": "1980",
        "imdbID": "tt0080684",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    }
    return (
        <FilmCard Poster={Poster} Title={Title} Type={Type} imdbID={imdbID} Year={Year}/>
    )
}