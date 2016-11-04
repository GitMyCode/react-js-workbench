import React from "react";
import ReactDOM from "react-dom";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router";
export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Martin",
            title: "UN TITRE"
        };

    }

    changeTitle(e) {
        var title = e.target.value;
        this.setState({ title });
    }

    render() {
        // setInterval(() => {
        //     var newName = this.state.name == "Blanc" ? "Noir" : "Blanc";
        //     this.setState({ name: newName });
        // }, 1000);

        return (
            <div>
                <ul>
                    <li><Link to="/">Features</Link></li>
                    <li><Link to="settings">Settings</Link></li>
                    <li><Link to="articles">Articles</Link></li>
                </ul>
                <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
                <input onChange={this.changeTitle.bind(this)} />
                {this.props.children}
                <Footer />
            </div>
        );
    }
}
