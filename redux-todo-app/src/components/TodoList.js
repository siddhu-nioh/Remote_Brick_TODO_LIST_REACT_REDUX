import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './TodoList.css'; 

const TodoList = () => {
  const [input, setInput] = useState('');
  const [editText, setEditText] = useState('');
  const [editId, setEditId] = useState(null); 
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const addTodo = () => {
    if (input.trim()) {
      const newTodo = { id: Date.now(), text: input };
      dispatch({ type: 'ADD_TODO', payload: newTodo });
      setInput('');
    }
  };

  const deleteTodo = (id) => {
    dispatch({ type: 'DELETE_TODO', payload: id });
  };

  const updateTodo = () => {
    if (editText.trim()) {
      dispatch({ type: 'UPDATE_TODO', payload: { id: editId, text: editText } });
      setEditText('');
      setEditId(null); 
    }
  };

  const startEdit = (todo) => {
    setEditText(todo.text);
    setEditId(todo.id); 
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <div className="input-section">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.id === editId ? (
            
              <div className="edit-section">
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  placeholder="Edit task"
                />
                <button onClick={updateTodo}>Update</button>
              </div>
            ) : (
              <div className="view-section">
                <div>
                {todo.text}{' '}
                </div>
                <div className='but'>
                <button className="delete-button" onClick={() => deleteTodo(todo.id)}>
                  Delete
                </button>
                <button className="edit-button" onClick={() => startEdit(todo)}>
                  Edit
                </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
