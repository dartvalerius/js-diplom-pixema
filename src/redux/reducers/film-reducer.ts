import { IFilm, IFilmCard, IFilmsState } from "../../types";

const initialState = {
    filmCards: [] as IFilmCard[]
}

export const filmsReducer = (state: IFilmsState = initialState, action: any) => {
    switch(action.type) {
        default: return state;
    }
}