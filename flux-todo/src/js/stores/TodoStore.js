import {
    EventEmitter
}
from "events";

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
}

// singleton
const todoStore = new TodoStore;
export default todoStore;
window.todoStore = todoStore;