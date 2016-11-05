import React from "react";
import TodoStore from "../stores/TodoStore";
import * as TodoActions from "../actions/TodoActions";

export default class Todos extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: TodoStore.getAll()
        }
    }

    componentWillMount() {
        TodoStore.on("change", () => {
            this.setState({
                todos: TodoStore.getAll()
            })
        })
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

    _deleteTodo(id){
        TodoActions.deleteTodo(id)
    }

    render() {
        const { id, complete, edit, text } = this.props;
        const icon = complete ? "\u2714" : "\u2716"

        return (
            <li>
                <span style={{ marginRight: "10px" }}>{text}</span>
                <span style={{ marginRight: "10px" }}>{icon}</span>
                <span class="glyphicon glyphicon-remove-sign" onClick={this._deleteTodo.bind(this, id)}></span>
            </li>
        )
    }
}