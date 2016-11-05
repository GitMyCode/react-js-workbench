import React from "react";
import { Link, IndexLink } from "react-router";


export default class Navbar extends React.Component {
    constructor() {
        super();

    }

    render() {
        return (
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="#">WebSiteName</a>
                    </div>
                    <ul class="nav navbar-nav">
                        <li activeClassName="active" onlyActiveOnIndex={true}>
                            <IndexLink to="/">Todos</IndexLink>
                        </li>
                        <li activeClassName="active">
                            <Link to="projects">Projects</Link>
                        </li>
                        <li activeClassName="active">
                            <Link to="profile">Profile</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}