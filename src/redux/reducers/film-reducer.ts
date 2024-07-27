import { IFilm, IFilmCard, IFilmsState } from "../../types";
import { SET_CURRENT_PAGE, SET_FILM_CARDS, SET_SELECTED_FILM } from "../action-types";

const initialState = {
    filmCards: [] as IFilmCard[],
    selectedFilm: {} as IFilm,
    currentPage: 1
}

export const filmsReducer = (state: IFilmsState = initialState, action: any) => {
    switch(action.type) {
        case SET_FILM_CARDS: {
            const { cards } = action;

            return ({
                ...state,
                filmCards: cards
            })
        }
        case SET_CURRENT_PAGE: {
            const { currentPage } = action;
            return ({
                ...state,
                currentPage
            })
        }
        case SET_SELECTED_FILM: {
            return ({
                ...state,
                selectedFilm: action.film
            })
        }
        default: return state;
    }
}