import {createAsyncThunk} from "@reduxjs/toolkit";
import {ApiTask, Task, TaskInStore} from "../../type";
import axiosApi from "../../axiosApi";

export const fetchTask = createAsyncThunk(
  "todoList/fetch",
  async () => {
    const {data: response} = await axiosApi.get<ApiTask | null>(".json");

    if(response) {
      const newResponse: TaskInStore[] = Object.keys(response).map((id) => {
        return {
          ...response[id],
          id
        };
      }).reverse();
      return newResponse;

    } else {
      return [];
    }
  }
);

export const addTask = createAsyncThunk<void, Task>(
  "todoList/addTask",
  async (arg) => {
    await axiosApi.post(".json", {...arg});
  }
);

export const putTaskApi = createAsyncThunk<void, TaskInStore>(
  "todoList/putTask",
  async (arg) => {
    const task: Task = {
      title: arg.title,
      isActive: arg.isActive,
    };
    await axiosApi.put(`/${arg.id}.json`, task);
  }
);

export const deleteTaskApi = createAsyncThunk<void, string>(
  "todoList/delete",
  async (arg) => {
    await axiosApi.delete(`/${arg}.json`);
    fetchTask();
  }
);