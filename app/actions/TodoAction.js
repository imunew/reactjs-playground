import dispatcher from "./../dispatcher/AppDispatcher";

export function addTodo(text) {
    // ディスパッチャーを呼びます。
    dispatcher.dispatch({type:"CREATE_TODO", text});
}

export function deleteTodo(id) {
    // ディスパッチャーを呼びます。
    dispatcher.dispatch({type:"DELETE_TODO", id});
}
