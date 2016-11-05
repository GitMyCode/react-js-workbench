import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./pages/Layout";
import Todos from "./pages/Todos";
import Projects from "./pages/Projects";
import Profile from "./pages/Profile";

const app = document.getElementById("app");
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Todos}></IndexRoute>
            <Route path="/projects" name="projects" component={Projects}></Route>
            <Route path="/profile" name="profile" component={Profile}></Route>
        </Route>
    </Router>
    , app);