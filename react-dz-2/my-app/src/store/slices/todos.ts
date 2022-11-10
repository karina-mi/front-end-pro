import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {todosApi} from '../api/todos'
import {ITodosSlice} from "./type";


const initialState: ITodosSlice = {
  items: []
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    removeTodo: (state, {payload}: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== payload)
    },
    changeStatus: (state, {payload}: PayloadAction<number>) => {
      state.items = state.items.map(item => {
        if(item.id === payload) {
          item.completed = !item.completed
        }
        return item
      })
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      todosApi.endpoints.getAllTodos.matchFulfilled,
      (state, {payload}) => {
        state.items = payload
      }
    )

  }
})
export const {removeTodo, changeStatus} = todoSlice.actions
export default todoSlice.reducer