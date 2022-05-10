import  React, { useState }  from 'react';
import PropTypes from 'prop-types';
import TodoRemaining from './TodoRemaining'
import TodoFilter from './TodoFilter'

Todolist.propTypes = {
    todos: PropTypes.array.isRequired,
    completeTodo: PropTypes.func.isRequired,
    showEdit: PropTypes.func.isRequired,
    updateTodo: PropTypes.func.isRequired,
    cancelEdit: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    remaining: PropTypes.number.isRequired,
    clearCompleted: PropTypes.func.isRequired,
    todosFiltered: PropTypes.func.isRequired,
  };
  

function Todolist(props) {
  const [filter, setFilter] = useState('all');
    return (
        <div>
        <ul>
          {props.todosFiltered(filter).map((todo, index) => (
            <li className="todo-item-container" key={todo.id}>
              <div className="todo-item">
                <input
                  type="checkbox"
                  onChange={() => props.completeTodo(todo.id)}
                  checked={todo.isComplete ? true : false}
                />
                {!todo.isEditing ? (
                  <span
                    className={`todo-item-label ${
                      todo.isComplete ? "line-through" : ""
                    }`}
                    onDoubleClick={() => props.showEdit(todo.id)}
                  >
                    {todo.title}
                  </span>
                ) : (
                  <input
                    type="text"
                    onBlur={(event) => props.updateTodo(event, todo.id)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        props.updateTodo(event, todo.id);
                      } else if (event.key === "Escape") {
                        props.cancelEdit(todo.id);
                      }
                    }}
                    className="todo-item-input"
                    defaultValue={todo.title}
                    autoFocus
                  />
                )}
              </div>
              <button
                className="x-button"
                onClick={() => props.deleteTodo(todo.id)}
              >
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
            <div className="button" onClick={props.completeAll}>Check All</div>
          </div>
          <TodoRemaining remainingTodos={props.remaining} />
        </div>

        <div className="other-buttons-container">
          <TodoFilter
            todosFiltered={props.todosFiltered}
            filter={filter}
            setFilter={setFilter} />
          <div>
            <button className="button" onClick={props.clearCompleted}>Clear completed</button>
          </div>
        </div>
      </div>
    );
}

export default Todolist;