import { IFilm, IFilmCard, IFilmCardsState } from "../../types";

const initialState = {
    filmCards: [] as IFilmCard[]
}

export const filmsReducer = (state: IFilmCardsState = initialState, action: any) => {
    switch(action.type) {
        default: return state;
    }
}