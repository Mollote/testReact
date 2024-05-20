import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';



/**
 * 2초 지연을 시키는 함수입니다 (비동기 작업).
 */
import { waitTwoSeconds } from '../../utils';
import { useSelector } from 'react-redux';
import { act } from 'react';

export const __addToDo = createAsyncThunk(
  '__addToDo',
  async (payload, thunkAPI) => {

  }
);

export const __deleteTodo = createAsyncThunk(
  '__deleteToDo',
  async (payload, thunkAPI) => {}
);

const initialState = {
  list: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.list =[{
        id: action.payload.id,
        title: action.payload.title,
        body: action.payload.body,
      }, ...state.list]
    },
    deleteTodo: (state, action) => {
      state.list = 
        state.list.filter(todo=>todo.id !== action.payload)
    },
  },
});

export const { addTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
