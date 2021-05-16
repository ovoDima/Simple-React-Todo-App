import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import Context from '../context'

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-berween',
        aligntItems: 'center',
        padding: '5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem',
    },
    input: {
        margin: '0 1rem 0 0'
    }
}

function TodoItem({ todo, index, onChange }) {
    const {removeTodo} = useContext(Context)
    const classes = []

    if(todo.completed) {
        classes.push('done')
    }
    return (
        <li style={styles.li}>
            <span className={classes.join(' ')}>
                <input type='checkbox' 
                style={styles.input}
                // Добавлен обработчик событий onChange и создано такое же свойство которое будет вызываться по нажатию. 
                onChange={() => onChange(todo.id)} 
                checked={todo.completed}
                />
                <strong>{ index + 1 }</strong>
                &nbsp;
                {todo.title}
            </span>
            
            <button className='rm' onClick={() => removeTodo(todo.id)}>&times;</button>
           
        </li>
    )
}

export default TodoItem
//Делает тоже самое что и в файле TodoList.
// Определяем валидацию параметров для функции TodoItems.
// todo: PropTypes.object.isRequired - todo - вызывает 
// свойство PropTypes указывая тип object  указывая что она нам необходим для 
// работы в этой компоненте - Required

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}