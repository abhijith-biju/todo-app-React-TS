import React, { useRef } from 'react';
import './NewTodo.css';

type NewTodoProps = {
    onAddTodo: (todoText: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = ({ onAddTodo }) => {
    const textInputRef = useRef<HTMLInputElement>(null);

    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        onAddTodo(textInputRef.current!.value);
    };

    return (
        <form>
            <div className="form-control">
                <label htmlFor="todo-text">Todo Text</label>
                <input type="text" id="todo-text" ref={textInputRef} />
            </div>
            <button type="submit" onClick={todoSubmitHandler}>
                ADD TODO
            </button>
        </form>
    );
};

export default NewTodo;
