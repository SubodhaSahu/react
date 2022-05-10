import React, { useState } from "react";
import Another from "./Another";
import "../App.css";
import userEvent from "@testing-library/user-event";
import Notodo from "./Notodo";
import Todoform from "./Todoform";
import Todolist from "./Todolist";

function App() {
  const regInput = React.useRef();
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Finish React Series",
      isComplete: false,
      isEditing: false,
    },
    {
      id: 2,
      title: "Go Grocery",
      isComplete: true,
      isEditing: false,
    },
    {
      id: 3,
      title: "Take over world",
      isComplete: false,
      isEditing: false,
    },
  ]);
  const [todoId, setTodoId] = useState(todos.length);

  let addTodo = (todo) => {
    const newTodo = {
      id: todoId + 1,
      title: todo,
      isComplete: false,
      isEditing: false,
    };
    setTodoId((todoId) => todoId + 1);
    setTodos((todos) => [...todos, newTodo]);
  };

  let deleteTodo = (todoId) => {
    setTodos((todos) => [...todos].filter((todo) => todo.id !== todoId));
  };
  let completeTodo = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  let showEdit = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.isEditing = true;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  let updateTodo = (event, todoId) => {
    let title = event.target.value;
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        if (title.trim().length === 0) {
          todo.isEditing = false;
          return todo;
        }

        todo.title = title;
        todo.isEditing = false;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  let cancelEdit = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.isEditing = false;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  let remainingTodos = () => {
    return todos.filter((todo) => !todo.isComplete).length;
  };
  let clearCompleted = () => {
    setTodos([...todos].filter((todo) => !todo.isComplete));
  };
  let completeAll = () => {
    const updatedTodos = todos.map((todo) => {
      todo.isComplete = true;
      return todo;
    });
    setTodos(updatedTodos);
  };

  function todosFiltered(filter) {
    if (filter === "all") {
      return todos;
    } else if (filter === "active") {
      return todos.filter((todo) => !todo.isComplete);
    } else if (filter === "completed") {
      return todos.filter((todo) => todo.isComplete);
    }
  }

  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>
        <Todoform addTodo={addTodo} />
        {todos.length > 0 ? (
          <Todolist
            todos={todos}
            completeTodo={completeTodo}
            showEdit={showEdit}
            updateTodo={updateTodo}
            cancelEdit={cancelEdit}
            deleteTodo={deleteTodo}
            remainingTodos={remainingTodos}
            clearCompleted={clearCompleted}
            completeAll={completeAll}
            todosFiltered={todosFiltered}
          />
        ) : (
          <Notodo />
        )}
      </div>
    </div>
  );
}

export default App;
