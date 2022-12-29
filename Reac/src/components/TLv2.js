import React, { useState, useEffect } from 'react';

function TodoListv2() {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9999/cars")
            .then((response) => response.json())
            .then((data) => setTodos(data));
    },[]);
    const addTodo = (todo) => {
        fetch("http://localhost:9999/cars", {
            method: 'POST',
            body: JSON.stringify({ todo }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => setTodos([...todos, data]));
    };

    const handleClick = (id) => {
        const newTodos = [...todos];
        const index = newTodos.findIndex((todo) => todo.todo === id);
        newTodos[index] = {
            ...newTodos[index],
            color: newTodos[index].color === 'black' ? 'white' : 'GREEN',
            textColor: newTodos[index].textColor === 'black' ? 'white' : 'Green',
        };
        setTodos(newTodos);
    };

    return (
        <div>
            <h1>Todo List</h1>
            <form onSubmit={(e) => {
// e.preventDefault(); jooonge kp wie das gehen soll
                addTodo(e.target.todo.value);
                e.target.reset();
            }}>
                <input type="text" name="todo" placeholder="Add a new todo" required />
                <button type='submit' >Add</button>
            </form>
            <ul>
                {todos.map((todo) => (
                    <button className='BTN' key={todo.todo} style={{ backgroundColor: todo.color, color: todo.textColor }} onClick={() => handleClick(todo.todo)}>
                        {todo.todo}
                    </button>


                ))}
            </ul>
        </div>
    );
}

export default TodoListv2;
