import { IUser, IUserState } from "../../types";
import { SET_USER } from "../action-types";

const initialState = {
    user: {} as IUser
}

export const userReducer = (state: IUserState = initialState, action: any) => {
    switch(action.type) {
        case SET_USER: {
            localStorage.setItem('apiKey', action.user.apiKey);
            localStorage.setItem('username', action.user.username);
            localStorage.setItem('email', action.user.email);
            localStorage.setItem('favorites', action.user.favorites);
            return ({
                ...state,
                user: action.user
            })
        }
        default: return state;
    }
}