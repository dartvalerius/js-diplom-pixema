export enum InputType {
    TEXT = 'text',
    EMAIL = 'email',
    PASSWORD = 'password',
    TEXTAREA = 'textarea'
}

export enum ButtonType {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

export interface IInput {
    title: string,
    type?: InputType,
    value?: string,
    placeholder?: string,
    disabled?: boolean,
    errorText?: string,
    onChange: Function
}

export interface IButton {
    content: string,
    type?: ButtonType,
    disabled?: boolean,
    onClick: Function
}

export interface ISwitch {
    checked?: boolean,
    disabled?: boolean,
    onChange: Function
}

export interface ISearch {
    onChange: Function,
    onClickFilter: Function,
    disabled?: boolean,
    filtered?: boolean
}

export interface ILink {
    children: any,
    title: string,
    path: string,
    active?: boolean,
    disabled?: boolean
}

export interface IFilmCard {
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string
}

export interface IFilCardsOptions {
    currentPage: number,
    search?: string
}

export interface IFilm {
    Title: string,
    Genre: string,
    imdbRating: string,
    Runtime: string,
    Plot: string,
    Year: string,
    Released: string,
    BoxOffice: string,
    Country: string,
    Actors: string,
    Director: string,
    Poster: string
}

export interface IUser {
    apiKey: string,
    email: string,
    username: string,
    favorites?: string[]
}

export interface IFilmsState {
    filmCards: IFilmCard[],
    selectedFilm: IFilm,
    currentPage: number
}

export interface IUIState {

}

export interface IUserState {
    user: IUser
}

export interface IStorState {
    films: IFilmsState,
    ui: IUIState,
    user: IUserState
}