import {createSlice} from "@reduxjs/toolkit";
import {TaskState} from "../../type";
import {fetchTask} from "./TodoThunks";

const initialStateTodoList: TaskState = {
  tasks: [],
  loading: false,
  buttonsLoading: false,
  error: false,
};

export const todoListSlice = createSlice({
  name: "todoList",
  initialState: initialStateTodoList,
  reducers: {
    changeBtnLoading: (state) => {
      state.buttonsLoading = !state.buttonsLoading;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTask.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(fetchTask.fulfilled, (state, action) => {
      state.loading = false;
      state.tasks = action.payload;
    });
    builder.addCase(fetchTask.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export const todoListReducer = todoListSlice.reducer;
export const {changeBtnLoading} = todoListSlice.actions;