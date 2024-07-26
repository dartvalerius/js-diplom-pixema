import { IUserState } from "../../types";

const initialState = {

}

export const userReducer = (state: IUserState = initialState, action: any) => {
    switch(action.type) {
        default: return state;
    }
}