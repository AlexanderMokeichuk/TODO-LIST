import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../app/store";
import {useEffect} from "react";
import {fetchTask} from "./TodoThunks";

const TodoList = () => {
  const {tasks, loading} = useSelector((state: RootState) => state.todoList);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    void dispatch(fetchTask());
  }, [dispatch]);

  return (
    <div>
      {(loading) ? "lof" : tasks.map((item) => {
        return (
          <div key={item.id} className={"alert alert-primary"}>
            <div>{item.title}</div>
            <input type={"checkbox"}/>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;