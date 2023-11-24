// todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: JSON.parse(localStorage.getItem('todos')) || [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: state.todos.length + 1,
        title: action.payload.title,
        completed: false,
      };
      state.todos.push(newTodo);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    updateTodo: (state, action) => {
      const { id, completed } = action.payload;
      const index = state.todos.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        state.todos[index] = { ...state.todos[index], completed };
        localStorage.setItem('todos', JSON.stringify(state.todos));
      }
    },
    removeAllTodos: (state) => {
      state.todos = [];
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
  },
});

export const { addTodo, removeTodo, updateTodo, removeAllTodos } = todoSlice.actions;
export const fetchLocalTodos = () => (dispatch) => {};
export default todoSlice.reducer;
