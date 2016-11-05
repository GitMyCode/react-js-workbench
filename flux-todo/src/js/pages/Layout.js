import React from "react";
import { link } from "react-router";

import Navbar from "../components/Navbar";

export default class Layout extends React.Component {
    render() {
        return (
            <div class="container">
                <Navbar></Navbar>
                <div>
                    <div class="row">
                        <div class="col-lg-12">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}