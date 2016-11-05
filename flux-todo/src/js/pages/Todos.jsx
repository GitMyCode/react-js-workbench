import React from "react";
import TodoStore from "../stores/TodoStore";

export default class Todos extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: TodoStore.getAll()
        }

    }
    render() {
        const { todos } = this.state;
        const TodoComponents = todos.map((todo) => {
            return <TodoItem key={todo.id} {...todo} />;
        });

        return (
            <div>
                <h1>Todos</h1>
                <ul>
                    {TodoComponents}
                </ul>
            </div>
        );
    }
}

export class TodoItem extends React.Component {
    constructor(props) {
        super();
    }

    render() {

        const { complete, edit, text } = this.props;
        const icon = complete ? "\u2714" : "\u2716"

        return (
            <li>
                <span style={{ marginRight: "10px" }}>{text}</span>
                <span>{icon}</span>
            </li>
        )
    }
}