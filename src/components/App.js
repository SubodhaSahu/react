import React, { useEffect, useMemo, useRef, useState } from "react";
import Another from "./Another";
import "../App.css";
import userEvent from "@testing-library/user-event";
import Notodo from "./Notodo";
import Todoform from "./Todoform";
import Todolist from "./Todolist";
import useLocalStorage from "../hooks/useLocalStorage";
import { TodoContext } from "../context/TodoContext";

function App() {
  //const [name, setName] = useState("");
  const [name, setName] = useLocalStorage("name", ""); //Using Custom Hook
  const nameInputEle = useRef("");
  const [todos, setTodos] = useLocalStorage("todos", [
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
  //const [todoId, setTodoId] = useState(todos.length);
  const [todoId, setTodoId] = useLocalStorage("id", todos.length); //Using custom hook

  // let addTodo = (todo) => {
  //   const newTodo = {
  //     id: todoId + 1,
  //     title: todo,
  //     isComplete: false,
  //     isEditing: false,
  //   };
  //   setTodoId((todoId) => todoId + 1);
  //   setTodos((todos) => [...todos, newTodo]);
  // };

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
  let remainingCalculation = () => {
    setTimeout(() => {
      console.log("Waiting period");
    }, 60000);
    return todos.filter((todo) => !todo.isComplete).length;
  };
  const remaining = useMemo(remainingCalculation, [todos]);
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
  useEffect(() => {
    nameInputEle.current.focus();
  }, []);

  function handleNameInput(event) {
    setName(event.target.value);
  }
  const msg = "Hello from provider";

  return (
    <TodoContext.Provider value={{ msg, todos, setTodos, todoId, setTodoId }}>
      <div className="">
        <div className="name-container">
          <h2>What is your name?</h2>
          <form action="#">
            <input
              type="text"
              ref={nameInputEle}
              className="todo-input"
              value={name}
              placeholder="What is your name"
              onChange={handleNameInput}
            />
          </form>
          {name && <p>Hello {name}</p>}
        </div>
        <h2>Todo App</h2>
        <Todoform />
        {todos.length > 0 ? (
          <Todolist
            todos={todos}
            completeTodo={completeTodo}
            showEdit={showEdit}
            updateTodo={updateTodo}
            cancelEdit={cancelEdit}
            deleteTodo={deleteTodo}
            remaining={remaining}
            clearCompleted={clearCompleted}
            completeAll={completeAll}
            todosFiltered={todosFiltered}
          />
        ) : (
          <Notodo />
        )}
      </div>
    </TodoContext.Provider>
  );
}

export default App;
