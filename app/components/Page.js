import React from "react";
import Todo from "./Todo";
import TodoStore from "./../stores/TodoStore";
import AppBar from 'material-ui/AppBar';
import { List } from 'material-ui/List';
import * as TodoAction from "./../actions/TodoAction";
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';

export default class Page extends React.Component {

    constructor() {
        super();
        this.state = {
            todos: TodoStore.getAll(), // Todoリストをロードします。
            newTodoText: ''
        };
    }

    componentWillMount() { // ビューに初めて描画されるときに一回だけ呼ばれます。
        TodoStore.on("change", () => { // イベントを受け取る
            this.setState({
                todos: TodoStore.getAll(), // Todoリストをリロード
            });
        });
    }

    addTodo() {
        TodoAction.addTodo(this.state.newTodoText); // アクションを呼びます
        this.state.newTodoText = '';
    }

    onTextChanged(e) {
        this.setState({
            newTodoText: e.target.value.trim()
        });
    }

    render () {
        const {todos, newTodoText} = this.state;

        // mapで Todoエレメントを動的に作成。
        const todoList = todos.map((todo) => {
            return <Todo key={todo.id} {...todo}/>; // text={todo.text} complete={todo.complete}
        });

        return (
            <div>
                <AppBar title="My Todo List" showMenuIconButton={false} />
                <Toolbar>
                    <ToolbarGroup>
                        <TextField hintText={"Input task"} value={newTodoText} onChange={this.onTextChanged.bind(this)} />
                        <RaisedButton label="Add" primary={true} onClick={this.addTodo.bind(this)} disabled={newTodoText === ""} />
                    </ToolbarGroup>
                </Toolbar>
                <List>{todoList}</List>
            </div>
        );
    }
}
