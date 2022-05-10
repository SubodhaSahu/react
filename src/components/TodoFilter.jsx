import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoFilter extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <button className={`button filter-button 
                ${this.props.filter === 'all' ? 'filter-button-active' : ''}`
                }
                   onClick={() => {
                    this.props.setFilter('all');
                    this.props.todosFiltered('all');
                  }}>
                All
                </button>
                <button className={`button filter-button 
                ${this.props.filter === 'active' ? 'filter-button-active' : ''}`
                }
                    onClick={() => {
                        this.props.setFilter('active');
                        this.props.todosFiltered('active');
                      }}>Active</button>
                <button className={`button filter-button 
                ${this.props.filter === 'completed' ? 'filter-button-active' : ''}`
                }
                onClick={() => {
                    this.props.setFilter('completed');
                    this.props.todosFiltered('completed');
                  }}>Completed</button>
          </div>
        );
    }
}

TodoFilter.propTypes = {
    todosFiltered: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
    setFilter: PropTypes.func.isRequired,
};

export default TodoFilter;