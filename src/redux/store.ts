import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { filmsReducer, uiReducer, userReducer } from "./reducers";
import { all } from "redux-saga/effects";
import { watcherFilms } from "./action-creators";

const middleware = createSagaMiddleware();

function* rootSaga() {
    yield all([
        watcherFilms()
    ])
}

export const store = createStore(combineReducers({
    films: filmsReducer,
    ui: uiReducer,
    user: userReducer
}), {}, applyMiddleware(middleware));

middleware.run(rootSaga);