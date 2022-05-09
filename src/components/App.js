import React, { useState } from 'react';
import Another from './Another';
import '../App.css';
import userEvent from '@testing-library/user-event';

function App() {
  const regInput = React.useRef();
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish React Series',
      isComplete: false,
      isEditing : false
    },
    {
      id: 2,
      title: 'Go Grocery',
      isComplete: true,
      isEditing : false
    },
    {
      id: 3,
      title: 'Take over world',
      isComplete: false,
      isEditing : false
    },
  ]);
  const [todoId, setTodoId] = useState(todos.length);
  const [todoInput, setTodoInput] = useState('');
  let addTodo = (event) => {
    event.preventDefault()
    if (todoInput.trim().length === 0) {
      return;
    }


    const newTodo = {
      id: todoId + 1,
      title: todoInput,
      isComplete: false,
      isEditing: false
    }
    setTodoId(todoId => todoId + 1);
    setTodos(todos => [...todos, newTodo]);
    setTodoInput('');
  }
  let updateTodoInput = (element) => {
    setTodoInput(element.target.value)
  }

  let deleteTodo = (todoId) => {
    setTodos(todos => [...todos].filter(todo => todo.id !== todoId))
  }
  let completeTodo = (todoId) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === todoId) {
        todo.isComplete = !todo.isComplete
      }
      return todo;
    });
    setTodos(updatedTodos)
  }
  let showEdit = (todoId) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === todoId) {
        todo.isEditing = true
      }
      return todo;
    });
    setTodos(updatedTodos)

  }
  let updateTodo = (event, todoId) => {
    let title = event.target.value;
    const updatedTodos = todos.map(todo => {
      if (todo.id === todoId) {
        if (title.trim().length === 0) {
          todo.isEditing = false
          return todo;
        }
    
        todo.title = title;
        todo.isEditing = false
      }
      return todo;
    });
    setTodos(updatedTodos)

  }

  let cancelEdit = (todoId) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === todoId) {
        todo.isEditing = false
      }
      return todo;
    });
    setTodos(updatedTodos)

  }

  
  return (
    <div className="todo-app-container">
        <div className="todo-app">
        <h2>Todo App</h2>
        <form action="#" onSubmit={addTodo}>
            <input
            type="text"
           // ref={regInput}
            value={todoInput}
            onChange={updateTodoInput}
              className="todo-input"
              placeholder="What do you need to do?"
            />
          </form>
      <ul>
        {todos.map((todo, index) => (
        <li className="todo-item-container" key={todo.id}>
        <div className="todo-item">
              <input type="checkbox" onChange={() => completeTodo(todo.id)} checked={todo.isComplete ? true : false} />
              {!todo.isEditing ? (
                <span className={`todo-item-label ${todo.isComplete ? 'line-through' : ''}`} 
                onDoubleClick={() => showEdit(todo.id)} >{todo.title}</span>
              ) : (
                  <input type="text"
                    onBlur={(event) => updateTodo(event, todo.id)}
                    onKeyDown={event => {
                      if (event.key === 'Enter') {
                        updateTodo(event, todo.id)
                      } else if (event.key === 'Escape') {
                        cancelEdit(todo.id)
                      }
                    }
                      
                    }
                    className="todo-item-input"
                    defaultValue={todo.title}
                    autoFocus
                  /> 
              )}
    
        </div>
        <button className="x-button" onClick={() => deleteTodo(todo.id)}>
          <svg
            className="x-button-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </li>
        ))}
      </ul>
      <div className="check-all-container">
            <div>
              <div className="button">Check All</div>
            </div>

            <span>3 items remaining</span>
          </div>

          <div className="other-buttons-container">
            <div>
              <button className="button filter-button filter-button-active">
                All
              </button>
              <button className="button filter-button">Active</button>
              <button className="button filter-button">Completed</button>
            </div>
            <div>
              <button className="button">Clear completed</button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
