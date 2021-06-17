import React from "react";
import './TodoItem.css'
import TodoApp from '../TodoApp'

interface TodoItemProps {
  name: string;
  order : number;
  isChecked : boolean;
  handleDelete(key : number) : any;
  handleCheck(isChecked : boolean , key : number) : any;
}

const checkedColor = { color : "lightgreen" };
const uncheckedColor = { color : "black" };

function TodoItem(props: TodoItemProps) {
  return(
    <div className='box'>
      <div className='order'>{props.order}</div>
      <div className='content'>{props.name}</div>
      <button className='delBox' onClick={() => props.handleDelete(props.order - 1)}>X</button>
      <button className='checkBox' onClick={e => props.handleCheck(props.isChecked, props.order - 1)} style={props.isChecked ? checkedColor : uncheckedColor}>V</button>
    </div>
  )
}

export default TodoItem;