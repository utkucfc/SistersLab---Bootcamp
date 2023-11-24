// TodoList.js
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, fetchLocalTodos, removeAllTodos, removeTodo, updateTodo } from '@/store/todoSlice';

const TodoList = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState('');

  useEffect(() => {
    dispatch(fetchLocalTodos());
  }, [dispatch]);

  const handleAddTodo = () => {
    if (!todoText.trim()) return;
    dispatch(addTodo({ title: todoText }));
    setTodoText('');
  };

  const handleRemove = (todoId) => {
    dispatch(removeTodo(todoId));
  };

  const handleToggleCompletion = (todoId, completed) => {
    dispatch(updateTodo({ id: todoId, completed: !completed }));
  };

  const handleRemoveAllTodos = () => {
    dispatch(removeAllTodos());
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add New Todo"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
      <button onClick={handleRemoveAllTodos}>Delete All Todos</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.id} {todo.title}
            <button onClick={() => handleRemove(todo.id)}>Delete</button>
            <button onClick={() => handleToggleCompletion(todo.id, todo.completed)}>
              {todo.completed ? 'Press to Not Complete' : 'Press To Complete'}
            </button> {todo.completed ? 'Completed' : 'Not Completed'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
