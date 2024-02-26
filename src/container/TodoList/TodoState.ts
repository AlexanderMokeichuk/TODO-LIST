import {createSlice} from "@reduxjs/toolkit";
import {TaskState} from "../../type";
import {fetchTask} from "./TodoThunks";

const initialStateTodoList: TaskState = {
  tasks: [],
  loading: false,
  error: false,
};

export const todoListSlice = createSlice({
  name: "todoList",
  initialState: initialStateTodoList,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTask.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(fetchTask.fulfilled, (state, action) => {
      state.loading = false;
      state.tasks = action.payload;
    });
  },
});

export const todoListReducer = todoListSlice.reducer;