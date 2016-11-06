import React from "react";
import ReactDom from "react-dom";
import logger from "redux-logger";

import { applyMiddleware, combineReducers, createStore } from "redux";

const userReducer = (state = {}, action) => {
    switch (action.type) {
        case "CHANGE_NAME": {
            state = {...state, name: action.payload }
            break;
        }
        case "CHANGE_AGE": {
            state = {...state, age: action.payload }
            break;
        }
    }

    return state;
}

const tweetsReducer = (state = [], action) => {
    return state;
}
const reducers = combineReducers({
    user: userReducer,
    tweets: tweetsReducer
});
const store = createStore(reducers, applyMiddleware(logger()));


store.dispatch({ type: "CHANGE_NAME", payload: "Capitaine" });
store.dispatch({ type: "CHANGE_AGE", payload: "29" });

const app = document.getElementById("app");
ReactDom.render(
    <div>
        <h1>ALLO</h1>
    </div>
    , app
);