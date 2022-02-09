import React, { useState } from 'react';

const initialFormValues = {
    title: '',
    description: '',
}

const Form = ({ todoAdd }) => {

    const [formValues, setFormValues] = useState(initialFormValues);
    const {title, description} = formValues;
    
    const handlerInputChange = (e) => {

        const changedFormValues = {
            ...formValues,
            [e.target.name]: e.target.value
        }

        setFormValues(changedFormValues)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit');
        //     if (title === '' || description === '') {
        //         return
        //     }
        console.log(formValues);
        todoAdd(formValues);
    }

    return (
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
                value='Add'
            />
            
        </form>
    );
};

export default Form;

