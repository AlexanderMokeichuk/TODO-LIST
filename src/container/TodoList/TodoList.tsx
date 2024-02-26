import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../app/store";
import {useEffect} from "react";
import {fetchTask} from "./TodoThunks";
import Spinner from "../../components/Spinner/Spinner";
import TaskAlert from "../../components/TaskAlert/TaskAlert";

const TodoList = () => {
  const {tasks, loading} = useSelector((state: RootState) => state.todoList);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    void dispatch(fetchTask());
  }, [dispatch]);

  return (
    <div>
      {(loading) ? <Spinner/> : tasks.map((item) => {
        return <TaskAlert key={item.id} item={item}/>;
      })}
    </div>
  );
};

export default TodoList;