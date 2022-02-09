import React from 'react';

const Todo = ({todo, todoDelete, todoToggleCompleted, setTodoEdit}) =>{
    return (
        <div className={`card border-0 mt-2 ${todo.completed ? 'bg-info text-dark' : 'bg-dark text-light'}`}>
            <div className='card-body'>
                <div className='d-flex justify-content-between'>
                    <h3 className={`card-title text-right ${todo.completed && 'text-decoration-line-through'}`}>
                        {todo.title}
                    </h3>
                    <button 
                    onClick={() => todoToggleCompleted(todo.id)}
                    className={`btn ${todo.completed ? 'btn-info' : 'btn-outline-info' } rounded-circle`}>
                    <i className="bi bi-check2-circle"></i>
                    </button>
                </div>
                <p className={`card-text text-start ${todo.completed && 'text-decoration-line-through'}`}>
                    {todo.description}
                </p>
                < hr />
                <div className='d-flex justify-content-between'>
                    
                    {
                        todo.completed 
                        ? (
                            <p className='card-text fst-italic'>Completed</p>
                        )
                        : (
                            <p className='card-text'>Incompleted</p>
                        )
                    }
                    <div>
                        <button 
                        onClick={() => setTodoEdit(todo)}
                        className='btn btn-sm btn-primary me-2'>
                            <i className="bi bi-pen"></i>
                        </button>
                        <button 
                            onClick={() => todoDelete(todo.id)}
                            className='btn btn-sm btn-danger'>
                                <i className="bi bi-trash-fill"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Todo;