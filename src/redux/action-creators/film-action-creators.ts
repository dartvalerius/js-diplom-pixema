import { put, takeEvery } from "redux-saga/effects";
import { IFilm } from "../../types";
import { LOAD_SELECTED_FILM, SET_FILM_CARDS, SET_SELECTED_FILM } from "../action-types";

export const setFilmCards = () => ({
    type: SET_FILM_CARDS
})

export const setSelectedFilm = (film: IFilm) => ({
    type: SET_SELECTED_FILM,
    film
})

export const loadSelectedFilm = (id: string) => ({
    type: LOAD_SELECTED_FILM,
    id
})

function* fetchLoadSelectedFilm(action: any) {
    const apiKey = localStorage.getItem('apiKey');
    const { id } = action;
    const response: Response = yield fetch(`https://omdbapi.com/?apikey=${apiKey}&i=${id}`);
    const film: IFilm = yield response.json();
    yield put(setSelectedFilm(film))
}

export function* watcherFilms() {
    yield takeEvery(LOAD_SELECTED_FILM, fetchLoadSelectedFilm);
}