import React,{useState} from 'react'
import PropTypes from 'prop-types'
// COMUNICACION ENTRE COMPONENTES.
export const AddCategories = ({setCategories}) => {
    // ESTADO, siempre se trata del estado.
    const [inputValue, setinputValue] = useState('')
    const handleEvent = (e)=>{
        setinputValue(e.target.value);// pone en el estado lo que se escriba en el input
    }
    const handleSubmit = (e) => {
        e.preventDefault();// previene que el navegador se reinicie.
        // mira que lo que se escriba tenga almenos mas de 2 caracteres 
        if (inputValue.trim().length > 2) {
          setCategories(cats => [inputValue,...cats]) 
          setinputValue('') 
          
        }
        
    }
    return (
        <form onSubmit = {handleSubmit}>
            <h3>Add Categories.</h3>
            <input
                type = 'text'
                value = {inputValue}
                onChange = {handleEvent}
            />
            
        </form>
    )
}

AddCategories.propTypes = {
    setCategories: PropTypes.func.isRequired
}