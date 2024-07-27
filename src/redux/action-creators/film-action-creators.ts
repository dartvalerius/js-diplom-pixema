import { put, takeEvery } from "redux-saga/effects";
import { IFilCardsOptions, IFilm, IFilmCard } from "../../types";
import { LOAD_FILM_CARDS, LOAD_SELECTED_FILM, SET_CURRENT_PAGE, SET_FILM_CARDS, SET_SELECTED_FILM } from "../action-types";

export const setFilmCards = (cards: IFilmCard[]) => ({
    type: SET_FILM_CARDS,
    cards
})

export const loadFilmCards = (filmCardsOptions: IFilCardsOptions) => ({
    type: LOAD_FILM_CARDS,
    filmCardsOptions
})

export const setCurrentPage = (currentPage: number) => ({
    type: SET_CURRENT_PAGE,
    currentPage
})

export const setSelectedFilm = (film: IFilm) => ({
    type: SET_SELECTED_FILM,
    film
})

export const loadSelectedFilm = (id: string) => ({
    type: LOAD_SELECTED_FILM,
    id
})

function* fetchLoadFilmCards(action: any) {
    const apiKey = localStorage.getItem('apiKey');
    const { filmCardsOptions } = action;
    const { currentPage } = filmCardsOptions;
    const fetchString = `https://www.omdbapi.com/?apikey=${apiKey}&page=${currentPage}${'search' in filmCardsOptions ? `&s=${filmCardsOptions.search}` : '&s=star'}`;
    console.log(fetchString)
    const response: Response = yield fetch(fetchString);
    if (response.status === 200) {
        const { Search }: { Search: IFilmCard[] } = yield response.json();
        yield put(setFilmCards(Search));
        
    } else {
        console.log("error")
    }
}

function* fetchLoadSelectedFilm(action: any) {
    const apiKey = localStorage.getItem('apiKey');
    const { id } = action;
    const response: Response = yield fetch(`https://omdbapi.com/?apikey=${apiKey}&i=${id}`);
    const film: IFilm = yield response.json();
    yield put(setSelectedFilm(film))
}

export function* watcherFilms() {
    yield takeEvery(LOAD_SELECTED_FILM, fetchLoadSelectedFilm);
    yield takeEvery(LOAD_FILM_CARDS, fetchLoadFilmCards);
}