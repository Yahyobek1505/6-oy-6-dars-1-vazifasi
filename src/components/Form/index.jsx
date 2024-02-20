import React from 'react'
import {useRef, useState } from 'react';
import "./index.css"
import { getData } from '../utils/functions';
function Form(props) {
  const [error, setError] = useState('');
  const nameRef = useRef('');

  function validate(nameRef) {
    if (nameRef.current.value.trim().length < 5) {
      nameRef.current.focus();
      setError("Kamida 5 ta belgidan iborat bo'lishi kerak");
   
      return false
    }else{
      setError('')
    }
    return true
  }

  function handleSubmit(e) {
    e.preventDefault();
    const isValid = validate(nameRef);
    if (isValid) {
      const todo = {
        name: nameRef.current.value,
        status: 'unchecked',
        id: Date.now()
      }

      let todos = getData()
      todos.push(todo)
      localStorage.setItem('todos', JSON.stringify(todos))
      nameRef.current.value = '';
    }
  }

  return (
    <div className='form-wrapper'>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-content'>
        <input ref={nameRef} type="text"  placeholder='Enter todo'/>
        {
          error && <p>{error}</p>
        }
        </div>
        <button className='btn'>Submit</button>
      </form>
    </div>
  )
}

export default Form;

