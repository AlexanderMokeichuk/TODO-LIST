import React, {FormEvent, useState} from "react";
import {AppDispatch} from "../../app/store";
import {useDispatch} from "react-redux";
import {addTask, fetchTask} from "../TodoList/TodoThunks";
import {Task} from "../../type";
import {useNavigate} from "react-router-dom";

const defaultState: Task = {
  title: "",
  isActive: false,
};

const AddNewTask: React.FC = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState<Task>(defaultState);
  const dispatch: AppDispatch = useDispatch();

  const changeTitle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormState(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const addNewTask = (e: FormEvent) => {
    e.preventDefault();
    dispatch(addTask({...formState}));
    setFormState(defaultState);
    dispatch(fetchTask());
    navigate("/");
  };

  return (
    <div className={"p-4"}>
      <form onSubmit={addNewTask} className={"form-control d-flex flex-column gap-2 p-3"}>
        <div>
          <label htmlFor={"title"}>Title</label>
          <input
            type={"text"}
            name={"title"}
            className={"form-control"}
            required

            value={formState.title}
            onChange={changeTitle}
          />
        </div>
        <button type={"submit"} className={"btn btn-primary ms-auto"}>Add</button>
      </form>
    </div>
  );
};

export default AddNewTask;