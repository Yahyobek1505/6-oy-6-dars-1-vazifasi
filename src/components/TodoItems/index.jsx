import React from 'react'
import "./index.css"
function TodoItem(props) {
  const {name, status, id} = props.data;
  const {index} = props;
  let styleObj;
  if (index % 2 == 1) {

    styleObj ={
      backgroundColor: "gray"
    }

  }else{
    styleObj ={
      backgroundColor: "lightgrey"
    }
  }
  return (
    <div className='todoItem-wrapper' style={styleObj}>
      <div className="items">
        <form className='item-form'>
          <input type="checkbox" id='check'/>
          <label htmlFor="check">{name}</label>
        </form>
      </div>
      <div className="actions">
      <i class="fa-regular fa-pen-to-square"></i>
      <i class="fa-solid fa-trash-can"></i>
      </div>
    </div>
  )
}

export default TodoItem

