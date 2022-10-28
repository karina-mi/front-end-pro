import React from 'react'
import './TodoItem.css'

import {changeStatus, removeTodo} from '../../store/slices/todos'
import {useDispatch} from 'react-redux'


const TodoItem = ({id, completed, title}) => {
  const dispatch = useDispatch()

  return (
    <div key={id} className={`todos_item todos-item ${completed ? 'todos-item--completed' : ''}`}>
      <span className='todos-item_title'>{id}-{title}</ span>
      <div className='todos-item_actions'>
        <button
          type='button'
          className='todos-item_button'
          onClick={() => dispatch(
            changeStatus(id))}
        >
          <i className="bi bi-pencil-fill"></i>
        </button>
        {
          completed && (
            <button
              type='button' className='todos-item_button'
              onClick={() => dispatch(
                removeTodo(id))}
            >
              <i className="bi bi-trash3-fill"></i>
            </button>
          )
        }
      </div>
    </div>
  )
}

export default TodoItem