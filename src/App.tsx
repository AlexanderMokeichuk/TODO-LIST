import Layout from "./Layout/Layout";
import {Route, Routes} from "react-router-dom";
import TodoList from "./container/TodoList/TodoList";
import AddNewTask from "./container/AddNewTask/AddNewTask";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path={"/"} element={(<TodoList />)}/>
        <Route path={"new-task"} element={(<AddNewTask />)}/>
        <Route path={"*"} element={(<h1>Not found</h1>)}/>
      </Routes>
    </Layout>
  );
}

export default App;
