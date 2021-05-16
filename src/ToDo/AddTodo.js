import React from 'react'
import {useState} from 'react'
import PropTypes from 'prop-types'

const styles = {
    form: {
        margin: '0 0 1rem 0'
    }
}

// Create my Hooks

function useInputValue(defaultValue = '') {
    const [value, setValue] = useState(defaultValue)

    return {
        //Очистка поля ввода в кастомном хуке обьект bind .
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
       clear: () => setValue(''),
       value: () => value
    }
}

function AddTodo({onCreate}) {

    const input = useInputValue('')

    function submitHandler (event) {
        event.preventDefault()
    
        if(input.value().trim()) {
            onCreate(input.value())
            input.clear()
            // setValue('')
        }
    }

    return (
        <form 
        style={styles.form}
        onSubmit={submitHandler}>
            <input {...input.bind}/>
            <button type='submit'>Add Todo</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo