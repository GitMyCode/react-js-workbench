import React from "react";
import ReactDOM from "react-dom";

export default class Archives extends React.Component {
    render() {
        const {params} = this.props;
        const {query} = this.props.location;
        const {date, filter} = query;

        return (
            <div>
                <h1>Archives ({this.props.params.article})</h1>
                <span>date: {date}</span>
                <span>Filter: {filter}</span>
            </div>
        );
    }
}