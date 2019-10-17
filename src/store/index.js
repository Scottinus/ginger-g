import thunk from "redux-thunk";
import rootReducer from "../reducers";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
    gameList: [],
    filter: "New"
}



export default function configureStore() {
    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(thunk))
    )
}

