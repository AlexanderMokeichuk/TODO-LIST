import React, {useState} from "react";
import {TaskInStore} from "../../type";
import {AppDispatch, RootState} from "../../app/store";
import {useDispatch, useSelector} from "react-redux";
import {deleteTaskApi, fetchTask, putTaskApi} from "../../container/TodoList/TodoThunks";
import {changeBtnLoading} from "../../container/TodoList/TodoState";
import BtnSpinner from "../../BtnSpinner/BtnSpinner";

interface Props {
  item: TaskInStore,
}

const TaskAlert: React.FC<Props> = ({item}) => {
  const {buttonsLoading} = useSelector((state: RootState) => state.todoList);
  const [btnLoading, setBtnLoading] = useState<string>("");
  const dispatch: AppDispatch = useDispatch();

  const deleteTask = async (id:string) => {
    if(confirm("Delete this task&")) {
      setBtnLoading(id);
      dispatch(changeBtnLoading());
      await dispatch(deleteTaskApi(id));
      dispatch(fetchTask());
      dispatch(changeBtnLoading());
    }
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
      <div className={"d-flex ms-auto gap-2 bg-white px-1 rounded"} style={{width: 100}}>
        <label>is Active?</label>
        <input
          type={"checkbox"}
          className={"form-check-input"}
          checked={item.isActive}
          onClick={() => putTask(item)}
        />
      </div>
      <div className={"text-break border-black border-bottom"}>
        {item.title}
      </div>
      <div className={"d-flex mt-2"}>

        <button
          type={"button"}
          className={"btn btn-danger ms-auto"}
          onClick={() => deleteTask(item.id)}
          disabled={buttonsLoading}
        >
          {
            (btnLoading === item.id)
            ? <BtnSpinner/>
            : "Delete"
          }
        </button>
      </div>
    </div>
  );
};

export default TaskAlert;