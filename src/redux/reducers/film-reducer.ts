import { IFilm, IFilmCard, IFilmsState } from "../../types";
import { SET_SELECTED_FILM } from "../action-types";

const initialState = {
    filmCards: [] as IFilmCard[],
    selectedFilm: {} as IFilm
}

export const filmsReducer = (state: IFilmsState = initialState, action: any) => {
    switch(action.type) {
        case SET_SELECTED_FILM: {
            return ({
                ...state,
                selectedFilm: action.film
            })
        }
        default: return state;
    }
}