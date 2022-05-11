import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

class Todoform extends Component {
    constructor(props) {
        super(props);
        this.state = { todoInput: '' };
        //let { msg, todos, setTodos } = this.context;
    }
    updateTodoInput = (element) => {
        this.setState({
            todoInput: element.target.value
      });
    }
    addTodos = (event) => {
        event.preventDefault();
        if (this.state.todoInput.trim().length === 0) {
        return;
        }
        this.context.setTodos([
            ...this.context.todos,
            {
              id: this.context.todoId,
              title: this.state.todoInput,
              isComplete: false,
            },
          ]);
        //this.context.setTodos(this.state.todoInput);
        this.setState({
            todoInput: ''
        });
        this.context.setTodoId(this.context.todoId + 1);
        //this.todoInput = '';
     }
    //const [todoInput, setTodoInput] = useState("");

    render() {
        
       // const {todos, setTods} = this.context;
        return (
            <div>
                <form action="#" onSubmit={this.addTodos}>
                    {/* <span>{ JSON.stringify(this.context.todos) }</span>
                    <p>{ JSON.stringify(this.context.setTodos) }</p> */}
                    <input
                        type="text"
                        // ref={regInput}
                        value={this.state.todoInput}
                        onChange={this.updateTodoInput}
                        className="todo-input"
                        placeholder="What do you need to do?"
                    />
              </form>
            </div>
        );
    }
}

Todoform.contextType = TodoContext;
export default Todoform;