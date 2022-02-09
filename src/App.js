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
    const [todoEdit, setTodoEdit] = useState(null);

    const todoDelete = (todoId) =>{
        if (todoEdit && todoId === todoEdit.id) {
            setTodoEdit(null)
        }

        const changedTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(changedTodos);
        
    }

    const todoToggleCompleted = (todoId) => {
        
        const changedTodos = todos.map(todo => todoId === todo.id ? {...todo, completed: !todo.completed} : todo)
        setTodos(changedTodos);
    }

    const todoAdd = (todo) => {

        const newTodo = {
            id: Date.now(),
            ...todo,
            completed: false
        }

        const changedTodos = [
            newTodo,
            ...todos
        ]

        setTodos(changedTodos);
    }

    const todoUpdate = (todoEdit) => {

        const changedTodos = todos.map(todo => {
            if(todo.id === todoEdit.id) 
                return todoEdit
            else
                return todo
        });

        setTodos(changedTodos);
    }

    return(
        <section className='container mt-5 '>
            
            <div className='flex-column mt-3 d-flex align-items-center'>
                <div className='col-7'>
                    < TodoForm 
                    todoEdit={todoEdit}
                    todoAdd={todoAdd}
                    todoUpdate={todoUpdate}
                    setTodoEdit={setTodoEdit}
                    />
                </div>
                <div className='col-7'>
                    
                    < TodoList 
                    todos={todos}
                    todoDelete={todoDelete}
                    todoToggleCompleted={todoToggleCompleted}
                    setTodoEdit={setTodoEdit}
                    />
                   
                </div>
            </div>
        </section>
    );
}

export default App;