import { IUIState } from "../../types"

const initialState = {

}

export const uiReducer = (state: IUIState = initialState, action: any) => {
    switch(action.type) {
        default: return state;
    }
}