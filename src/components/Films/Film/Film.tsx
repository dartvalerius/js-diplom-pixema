import { useParams } from 'react-router-dom';
import { IFilm, IStorState } from '../../../types';
import { Favorites, Share } from '../../_media';
import './index.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadSelectedFilm } from '../../../redux/action-creators';

const FilmInfo = ({title, text}: {title: string, text: string}) => {
    return (
        <div className="film-info-list-item">
            <div className="film-info-list-item__title">{title}</div>
            <div className="film-info-list-item__text">{text}</div>
        </div>
    )
}

const getGenre = (genre: string) =>  {
    if (genre)
        return genre.split(', ').join(' · ');
    else return ''
}

export const Film = () => {
    const { id = '' } = useParams();
    const film = useSelector((state: IStorState) => state.films.selectedFilm);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadSelectedFilm(id))
    }, [id])
    return (
        <div className='film'>
            <div className="film-poster">
                <div className="film-poster-img">
                    <img src={film.Poster} alt={film.Title} />
                </div>
                <div className="film-poster-control">
                    <div className='film-poster-control-button'><Favorites /></div>
                    <div className='film-poster-control-button'><Share /></div>
                </div>
            </div>
            <div className="film-info">
                <div className="film-info-genre">{getGenre(film.Genre)}</div>
                <div className="film-info-title">{film.Title}</div>
                <div className="film-info-added">
                    <div className="film-info-added__rating">{film.imdbRating}</div>
                    <div className="film-info-added__runtime">{film.Runtime}</div>
                </div>
                <div className="film-info-plot">{film.Plot}</div>
                <div className="film-info-list">
                    <FilmInfo title="Year" text={film.Year} />
                    <FilmInfo title="Released" text={film.Released} />
                    <FilmInfo title="BoxOffice" text={film.BoxOffice} />
                    <FilmInfo title="Country" text={film.Country} />
                    <FilmInfo title="Actors" text={film.Actors} />
                    <FilmInfo title="Director" text={film.Director} />
                </div>
            </div>
        </div>
    )
}