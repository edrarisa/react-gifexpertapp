import React,{useState} from 'react';
import propTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('Hola Mundo');
    const handledInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handledSubmit = (e)=> {
        e.preventDefault();

        if(inputValue.trim().length > 2){

            setCategories( cats => [inputValue, ...cats]);
            setInputValue('');
        }
    }
    return (
        <form onSubmit={handledSubmit}>
            <h2>Add Category</h2>
            <input 
            type="text"
            value={inputValue} 
            onChange={handledInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: propTypes.func.isRequired
}
