import { NavLink } from 'react-router-dom';
import { IFilmCard } from '../../../types';
import './index.scss';

export const FilmCard = ({Poster, Title, imdbID, Type, Year}: IFilmCard) => {
    return (
        <NavLink className='film-card' to={`/${imdbID}`}>
            <div className="film-card-img">
                <img src={Poster} alt={Title} />
            </div>
            <div className="film-card-title">{Title}</div>
            <div className="film-card-type">{Type}</div>
        </NavLink>
    )
}