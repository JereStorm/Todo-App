import React, {useState, useEffect} from 'react';
import Form from './Form'

const TodoForm = ({ todoAdd, todoEdit, todoUpdate, setTodoEdit }) => {

    const initialFormValues = {
        title: '',
        description: '',
    }

    const [formValues, setFormValues] = useState(initialFormValues);
    const {title, description} = formValues;
    const [error, setError] = useState(null);
    const [successMassage, setSuccessMassage] = useState(null)
    
    useEffect(() => {
        if(todoEdit)
        setFormValues(todoEdit)
        else
        setFormValues(initialFormValues)


    },[todoEdit])
    //ESTE ARREGLO DE DEPENDECIAS PUEDE TENER VARIAS STATES

    const handlerInputChange = (e) => {

        const changedFormValues = {
            ...formValues,
            [e.target.name]: e.target.value
        }

        setFormValues(changedFormValues)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //TRIM LIMPIA EL STRING DE ESPACIOS EN BLANCO
        if (title.trim() === '') {
            setError('Write a title...')
            return
        }

        if(todoEdit){
            //Actualizando
            todoUpdate(formValues);
            setSuccessMassage('Great to do Edit...');
        }
        else{
            //Agregando tarea
            todoAdd(formValues);
            setSuccessMassage('Great to do Add...');
            //LIMPIAMOS LOS INPUTS
            setFormValues(initialFormValues);
        }

        setError(null);

        setTimeout(() => {
            setSuccessMassage(null);
        }, 2000);
    }

    return (
        <div>
            {
                todoEdit && (
                    <button 
                    className='btn btn-sm btn-warning mb-2'
                    onClick={() => setTodoEdit(null)}
                    >Cancel Edit</button>
                )
            }
            <form onSubmit={(e) => handleSubmit(e)} className='form text-light'>
                <input 
                    type="text" 
                    name="title" 
                    placeholder="Title" 
                    value={title}
                    className="form-control bg-dark text-white"
                    onChange={handlerInputChange}
                />
                <textarea 
                    name="description" 
                    cols="1"  
                    placeholder="Description" 
                    value={description}
                    className="form-control bg-dark text-white mt-2"
                    onChange={handlerInputChange}
                ></textarea>
                <input type='submit'
                        className="btn btn-info mt-2"
                        value={todoEdit ? 'Edit' : 'Add'}/>
            </form>
            {   error &&
                (
                    <div className="alert alert-danger mt-2">
                        {error}
                    </div>  
                )
            }
            {   successMassage &&
                (
                    <div className="alert alert-success mt-2">
                        {successMassage}
                    </div>  
                )
            }
            
        </div>
        
    );
      
};

export default TodoForm;