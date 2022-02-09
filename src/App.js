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
    {
        id: 3,
        title: 'Todo #3',
        description: 'Desc del Todo #3',
        completed: true,
    },
    {
        id: 4,
        title: 'Todo #4',
        description: 'Desc del Todo #4',
        completed: false,
    },
];

const App = () => {

    const [todos, setTodos] = useState(initialTodos);

    const todoDelete = (todoId) =>{
        const changedTodos = todos.filter(todo => todo.id !== todoId);
        console.log(changedTodos);
        setTodos(changedTodos);
    }

    const todoToggleCompleted = (todoId) => {
        
        const changedTodos = todos.map(todo => todoId === todo.id ? {...todo, completed: !todo.completed} : todo)
        console.log(changedTodos);
        setTodos(changedTodos);
    }

    const todoAdd = (todo) => {

        const newTodo = {
            id: Date.now(),
            ...todo,
            completed: false
        }
        const changedTodos = [
            ...todos,
            newTodo
        ]

        setTodos(changedTodos);
    }
    
    return(
        <section className='container mt-5 '>
            
            <div className='flex-column mt-3 d-flex align-items-center'>
                <div className='col-7'>
                    < TodoForm 
                    todoAdd={todoAdd}
                    />
                </div>
                <div className='col-7'>
                    
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