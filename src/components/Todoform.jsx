import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Todoform extends Component {
    constructor(props) {
        super(props);
        this.state = { todoInput: '' }   
        
    }
    updateTodoInput = (element) => {
        this.setState({
            todoInput: element.target.value
      });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.todoInput.trim().length === 0) {
        return;
        }
        this.props.addTodo(this.state.todoInput);
        this.setState({
            todoInput: ''
      });
        //this.todoInput = '';
     }
    //const [todoInput, setTodoInput] = useState("");

    render() {
        return (
            <div>
                <form action="#" onSubmit={this.handleSubmit}>
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

Todoform.propTypes = {

};

export default Todoform;