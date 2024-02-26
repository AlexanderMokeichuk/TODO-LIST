import React from "react";
import {TaskInStore} from "../../type";
import {AppDispatch} from "../../app/store";
import {useDispatch} from "react-redux";
import {deleteTaskApi, fetchTask, putTaskApi} from "../../container/TodoList/TodoThunks";

interface Props {
  item: TaskInStore,
}

const TaskAlert: React.FC<Props> = ({item}) => {
  const dispatch: AppDispatch = useDispatch();

  const deleteTask = async (id:string) => {
    await dispatch(deleteTaskApi(id));
    dispatch(fetchTask());
  };

  const putTask = async (task: TaskInStore) => {
    const updateTask: TaskInStore = {
      id: task.id,
      title: task.title,
      isActive: !task.isActive,
    };
    await dispatch(putTaskApi(updateTask));
    dispatch(fetchTask());
  };

  return (
    <div className={"alert alert-primary"}>
      <div>{item.title}</div>
      <input type={"checkbox"} checked={item.isActive} onClick={() => putTask(item)}/>
      <button type={"button"} onClick={() => deleteTask(item.id)}>Delete</button>
    </div>
  );
};

export default TaskAlert;