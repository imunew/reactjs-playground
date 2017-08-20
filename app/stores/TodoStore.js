import { EventEmitter } from "events";
import dispatcher from "./../dispatcher/AppDispatcher";

class TodoStore extends EventEmitter {
    constructor() {
        super();
        this.todos = [ // Todoリストを保持します。
            {
                id: 10,
                text: "Go Shopping",
                complete: false
            },
            {
                id: 20,
                text: "Pay Bills",
                complete: false
            },
        ];
    }

    addTodo(text) {
        const id = Date.now(); // ユニークIDを適当に採番
        // Todoを新規追加
        this.todos.push({
            id,
            text,
            complete: false,
        });

        this.emit("change"); // イベントを発生
    }

    deleteTodo(id) {
        const self = this;
        self.todos.some(function(v, i) {
            if (v.id === id) self.todos.splice(i, 1);
        });

        this.emit("change"); // イベントを発生
    }

    // Todoリストを返します。
    getAll() {
        return this.todos;
    }

    // ディスパッチャーからアクションが渡されます。
    handleActions(action) {
        console.log("TodoStore received an action", action);
        switch (action.type) { // 追加のアクション`CREATE_TODO`か？
            case "CREATE_TODO": { // 自分で勝手に決めた定数
                this.addTodo(action.text); // アクションを追加する。で、イベント発生。
                break;
            }
            case "DELETE_TODO": {
                this.deleteTodo(action.id);
                break;
            }
        }
    }
}

const todoStore = new TodoStore;

window.td = todoStore; // # デバッグ用
// ディスパッチャーにコールバックを登録
dispatcher.register(todoStore.handleActions.bind(todoStore));
window.dp = dispatcher; // デバッグ用

export default todoStore;
