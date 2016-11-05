import {
    EventEmitter
}
from "events";
import dispatcher from "../dispatcher";

class TodoStore extends EventEmitter {
    constructor() {
        super();
        this.todos = [{
            id: 113464613,
            text: "Go Shopping",
            complete: false
        }, {
            id: 235684679,
            text: "Pay Water Bill",
            complete: true
        }, ];
    }

    _createTodo(text) {
        const id = Date.now();

        this.todos.push({
            id,
            text,
            complete: false
        });

        this.emit("change");
    }

    getAll() {
        return this.todos;
    }

    handlerActions(action) {
        switch (action.type) {
            case "CREATE_TODO":
                {
                    this._createTodo(action.text);
                }
        }
    }
}

// singleton
const todoStore = new TodoStore;
dispatcher.register(todoStore.handlerActions.bind(todoStore))

export default todoStore;
window.dispatcher = dispatcher;
window.todoStore = todoStore;