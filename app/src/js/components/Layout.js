import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";

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
                <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
                <input onChange={this.changeTitle.bind(this)} />

                <Footer />
            </div>
        );
    }
}
