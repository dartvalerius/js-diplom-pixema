import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { filmsReducer, uiReducer, userReducer } from "./reducers";

const middleware = createSagaMiddleware();

export const store = createStore(combineReducers({
    films: filmsReducer,
    ui: uiReducer,
    user: userReducer
}), {}, applyMiddleware(middleware));