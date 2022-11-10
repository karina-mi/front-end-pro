import React, {ChangeEvent, FC, useMemo, useState} from 'react'
import {useGetAllTodosQuery} from '../../store/api/todos'
import './index.css'

import TodoItem from './TodoItem'
import TodosPagination from './TodosPagination'
import TodosSort from './TodosSort'
import useFilterTodos from '../hooks/useFilterTodos'
import useGetSortedList from '../hooks/useGetSortedList'
import {useAppSelector} from "../../store/hooks";


const Todos:FC = () => {
  useGetAllTodosQuery()
  const {items} = useAppSelector(state => state.todos)

  const [page, setPage] = useState<number>(1)
  const [userSorId, setUserSorId] = useState('all')
  const [showOnlyCompleted, setShowOnlyCompleted] = useState<boolean>(false)


  const onSelect = (e: ChangeEvent<HTMLSelectElement>): void => {
    setUserSorId(e.target.value)
    setPage(1)
  }

  const sortedList = useGetSortedList(showOnlyCompleted, items, userSorId)


  const filteredTodos = useFilterTodos(page, sortedList)

  const userIdArr: Set<number> = useMemo(() => new Set(items.map(t => t.userId)), [items])

  return (
    <div className='todos'>
      <div className='todos_header todos-header'>
        <h1 className= 'todos-header_title'>TODOS COUNT: {items.length}</h1>
        <TodosSort {...{userSorId, onSelect, userIdArr}}/>
        <label>
        <input type='checkbox' onChange={() => setShowOnlyCompleted (!showOnlyCompleted)} checked={showOnlyCompleted} className='only-completed'/>
          <span>Only completed</span>
            </label>
      </div>
        <div className='todos-list'>
          {
            filteredTodos.map(todo => <TodoItem {...todo} key={todo.id} />)
          }
        </div>
      <TodosPagination {...{page, sortedList, setPage}}/>
    </div>
  )
}

export default Todos