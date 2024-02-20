import React, { useEffect, useState } from 'react'
import Header from '../Header';
import Form from '../Form';
import TodoItem from '../TodoItems';
import { getData } from '../utils/functions';
import "./index.css"
function Todo() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    setTodos(getData());
  }, [])
  return (
    <div className='todo-wrapper'>
      <Header/>
      <Form changeState = {setTodos}/>
      {
        todos.map((todo, index) => {
          return <TodoItem index = {index +1 } key={index} data={todo}> </TodoItem>
        })
      }
    </div>
  )
}

export default Todo;

