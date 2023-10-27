import { useState } from "react";
import "./todo.css";

const Todos = (() => {
    const [task, setTask] = useState('');
    const [todos, setTodos] = useState([]);

    const AddTodos = (() => {
        setTodos([...todos, task]);
        setTask('');
    })

    const DeleteTodos = ((index) => {
        setTodos(todos.filter((todo, todoIndex) => todoIndex !== index))
    })

    const EditTodos = (index) => {
        setTodos(todos.map((todo, todoIndex) => (todoIndex === index ? task : todo)));
        setTask('');
    }

    return (
        <div className="main">
            <h1>Todo List</h1>
            <div className="add">
                <input type="text" value={task} onChange={(event) => setTask(event.target.value)} />
                <button onClick={AddTodos} disabled={task === '' ? true : false}>Add</button>
            </div>
            <ul>
                {
                    todos.map((todo, index) => (
                        <li key={index}><div className="todo">{todo}</div>
                            <div className="buttons"><button onClick={() => DeleteTodos(index)}>Delete</button>
                                <button onClick={() => EditTodos(index)} disabled={task === '' ? true : false}>Edit</button></div>
                        </li>))}
            </ul>
        </div>
    )
})

export default Todos;