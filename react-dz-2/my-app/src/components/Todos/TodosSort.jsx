import React from 'react'
import './TodosSort.css'

const TodosSort = ({userSorId, onSelect, userIdArr}) =>{
  return (
    <select value={userSorId} onChange={onSelect} className='todo-selected'>
      <option selected value='all'>All</option>
      {
        [...userIdArr].map(id =>
          <option key={id} value={id}>userId: {id}</option>
        )
      }
    </select>
  )
}

export default TodosSort