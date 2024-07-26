import { IUser } from "../../types";
import { SET_USER } from "../action-types";

export const setUser = (user: IUser) => ({
    type: SET_USER,
    user
})