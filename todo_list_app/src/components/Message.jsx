import { todoItemsContext } from "../store/todo-Items-store";
import { useContext } from "react";

const ErrorMessage = () => {
  const { todoItems } = useContext(todoItemsContext);

  return (
    <>
      {todoItems.length == 0 ? (
        <h3 className="text-center mt-5">"Congratulations! You've cleared your to-do list.</h3>) : ""}
    </>
  );
};

export default ErrorMessage;
