import { useState } from 'react';

import TodoList from './components/TodoList';
import NewTodo from './components/newTodo';
import { Todo } from './components/todo.model';

function App() {
    const [todoList, setTodoList] = useState<Todo[]>([]);

    const toDoAddHandler = (text: string) => {
        setTodoList((prevTodoList) => [
            ...prevTodoList,
            { id: Math.random().toString(), text: text },
        ]);
    };

    const todoDeleteHandler = (todoId: string) => {
        setTodoList((prevTodoList) =>
            prevTodoList.filter((todoItem) => todoItem.id !== todoId)
        );
    };

    return (
        <>
            <NewTodo onAddTodo={toDoAddHandler} />
            <TodoList items={todoList} onDeleteTodo={todoDeleteHandler} />
        </>
    );
}

export default App;
