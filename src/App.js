import { func } from 'prop-types';
import React from 'react'
import './index.css';
import TodoList from './ToDo/ToDoList'
import Context from './context'
import AddTodo from './ToDo/AddTodo'





function App() {
  const [todos, setTodos] = React.useState([
    {id:1, completed: false, title: 'Going run'},
    {id:2, completed: false, title: 'Swim'},
    {id:3, completed: false, title: 'Bear'},
  ])
  

function toggleTodo(id) {
    setTodos( todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
  )
}
// ФУнкционал по удалению строк в списке.
function removeTodo(id) {
  //Если ТуДУ айди не равно айди которое передано в функцию
  //
  setTodos(todos.filter(todo => todo.id !== id))
}


function addTodo (title) {
  setTodos(todos.concat([{
    title,
    id: Date.now(),
    completed: false
  }]))
}

// todos - пример передачи параметров из константы todos, для коректного принятия параметров
// в файле TodoList в функции необходимо принять параметр добавив props.
  return (
    <Context.Provider value={{removeTodo}}>
    <div className="wrapper">
      <h1>Todo with React</h1>
      
      <AddTodo onCreate={addTodo} />
      {todos.length ? <TodoList 
      todos={todos}
      onToggle={toggleTodo}/> 
    : <p>No Todo!</p>}
      
    </div>    
    </Context.Provider>
  );
}



export default App;
