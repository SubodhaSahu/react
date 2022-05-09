import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Todoform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoInput: ''
        }
        this.updateTodoInput = (element) => {
            this.state.todoInput = element.target.value
        }
        this.handleSubmit = (event) => {
            event.preventDefault();
            if (this.state.todoInput.trim().length === 0) {
            return;
            }
            this.props.addTodo(this.state.todoInput);
            this.todoInput = '';
         }
    }
    //const [todoInput, setTodoInput] = useState("");

    render() {
        return (
            <div>
                <form action="#" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        // ref={regInput}
                        value={this.todoInput}
                        onChange={this.updateTodoInput}
                        className="todo-input"
                        placeholder="What do you need to do?"
                    />
              </form>
            </div>
        );
    }
}

Todoform.propTypes = {

};

export default Todoform;