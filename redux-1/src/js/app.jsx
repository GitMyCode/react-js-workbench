import React from "react";
import ReactDom from "react-dom";

import { combineReducers, createStore } from "redux";

const userReducer = (state = {}, action) => {
    switch (action.type) {
        case "CHANGE_NAME": {
            state.name = action.payload;
            break;
        }
        case "CHANGE_AGE": {
            state.age = action.payload;
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

const store = createStore(reducers);


store.subscribe(() => {
    console.log("Store change", store.getState());
})

store.dispatch({ type: "CHANGE_NAME", payload: "Capitaine" });
store.dispatch({ type: "CHANGE_AGE", payload: "29" });

const app = document.getElementById("app");
ReactDom.render(
    <div>
        <h1>ALLO</h1>
    </div>
    , app
);