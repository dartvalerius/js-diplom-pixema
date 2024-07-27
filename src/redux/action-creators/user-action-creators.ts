import { IUser } from "../../types";
import { LOG_OUT_USER, SET_USER } from "../action-types";

export const setUser = (user: IUser) => ({
    type: SET_USER,
    user
})

export const logoutUser = () => ({
    type: LOG_OUT_USER,
})