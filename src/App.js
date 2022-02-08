import React, {useState} from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
 
const initialTodos = [
    {
        id: 1,
        title: 'Todo #1',
        description: 'Desc del Todo #1',
        completed: true,
    },
    {
        id: 2,
        title: 'Todo #2',
        description: 'Desc del Todo #2',
        completed: false,
    },
];

const App = () => {

    const [todos, setTodos] = useState(initialTodos);

    const todoDelete = (todoId) =>{
        const changedTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(changedTodos);
    }

    const todoToggleCompleted = (todoId) => {
        
        const changedTodos = todos.map(todo => todoId === todo.id ? {...todo, completed: !todo.completed} : todo)

        setTodos(changedTodos);
    }
    return(
        <section className='container mt-5'>
            
            <div className='flex-column mt-3'>
                <div className='col-5'>
                    < TodoForm />
                </div>
                <div className='col-6 '>
                    
                    < TodoList 
                    todos={todos}
                    todoDelete={todoDelete}
                    todoToggleCompleted={todoToggleCompleted}
                    />
                   
                </div>
            </div>
        </section>
    );
}

export default App;