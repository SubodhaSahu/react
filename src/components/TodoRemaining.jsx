import React from 'react';

function TodoRemaining(props) {
    return (
        <div>
              <span>{props.remainingTodos} items remaining</span> 
        </div>
    );
}

export default TodoRemaining;