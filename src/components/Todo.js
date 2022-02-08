import React from 'react';

const Todo = ({todo, todoDelete, todoToggleCompleted}) =>{
    return (
        <div className={`card border-0 mt-2 ${todo.completed && 'bg-dark text-light'}`}>
            <div className='card-body'>
                <div className='d-flex justify-content-between'>
                    <h3 className='card-title text-right'>
                        {todo.title}
                    </h3>
                    <button 
                    onClick={() => todoToggleCompleted(todo.id)}
                    className={`btn ${todo.completed ? 'btn-info' : 'btn-outline-info' } rounded-circle`}>
                    <i className="bi bi-check2-circle"></i>
                    </button>
                </div>
                <p className='card-text text-start'>
                    {todo.description}
                </p>
                < hr />
                <div className='d-flex justify-content-end'>
                    <button 
                    
                    className='btn btn-sm btn-primary me-2'>Editar</button>
                    <button 
                    onClick={() => todoDelete(todo.id)}
                    className='btn btn-sm btn-danger'
                    >
                        Borrar
                    </button>

                </div>

                
            </div>
        </div>
    );
}

export default Todo;