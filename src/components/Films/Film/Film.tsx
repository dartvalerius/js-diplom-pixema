import { IFilm } from '../../../types';
import { Favorites, Share } from '../../_media';
import './index.scss';

const FilmInfo = ({title, text}: {title: string, text: string}) => {
    return (
        <div className="film-info-list-item">
            <div className="film-info-list-item__title">{title}</div>
            <div className="film-info-list-item__text">{text}</div>
        </div>
    )
}

export const Film = () => {
    const film: IFilm = {
        "Title": "Star Wars: Episode IV - A New Hope",
        "Genre": "Action, Adventure, Fantasy",
        "imdbRating": "8.6",
        "Runtime": "121 min",
        "Plot": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth ...",
        "Year": "1977",
        "Released": "25 May 1977",
        "BoxOffice": "$460,998,507",
        "Country": "United States",
        "Actors": "Mark Hamill, Harrison Ford, Carrie Fisher",
        "Director": "George Lucas",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
    }

    const genre = film.Genre.split(', ').join(' · ')
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
                <div className="film-info-genre">{genre}</div>
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