import React from 'react';
import Form from './Form'

const TodoForm = ({ todoAdd }) => {

    return(
        <div>
            <Form todoAdd={todoAdd} />
        </div>
    );
};

export default TodoForm;