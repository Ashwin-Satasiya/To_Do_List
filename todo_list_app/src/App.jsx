import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import "./App.css";
import ErrorMessage from "./components/Message";
import ContainerComp from "./store/todo-Items-store";

function App() {
  return (
    <>
      <ContainerComp>
        <AppName />  
        <AddTodo />
        <ErrorMessage />
        <TodoItem />
      </ContainerComp>
    </>
  );
}

export default App;
