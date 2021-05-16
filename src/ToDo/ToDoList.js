import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

// Пример задания стилей через обьект JS 
const styles = {
    ul: {
        listStyle: 'none'

    }
}
// функция Выводит список дел.
function TodoList(props) {
    return (
        <ul style={styles.ul}>
            { props.todos.map((todo, index) => {
                return <TodoItem 
                todo={todo} 
                key={todo.id} 
                index={index}
                onChange = {props.onToggle}/>
            })}
        </ul>
    )
}
//Определние типов свойств в компонентах/функциях.
// используя библиотеку propTypes.

//Передам параметр валидации/определение параметра func/array/number/string ...
    // todos как массив состоящий из обьектов.
    // isRequired - им мы говорим что данный параметр нам
    // нужен для работы с данным компонентом то есть TodoList.js.
TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object),
    onToggle: PropTypes.func.isRequired
}

export default TodoList

