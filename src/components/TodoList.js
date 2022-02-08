import React from 'react';
import Todo from './Todo.js';



const TodoList = ({todos, todoDelete, todoToggleCompleted}) =>{


    return (
        <div>
        {
            todos.map(todo => (
                <Todo
                    todo={todo} 
                    key={todo.id}
                    todoDelete={todoDelete}
                    todoToggleCompleted={todoToggleCompleted}
                />
            ))
        }            
        </div>
        
    );
}

export default TodoList