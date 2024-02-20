import { useRef } from "react";
import { RiFolderAddLine } from "react-icons/ri";

import { todoItemsContext } from "../store/todo-Items-store";
import { useContext } from "react";

function AddTodo() {
  const { onAddBtnClick } = useContext(todoItemsContext);

  const todoNameElement = useRef();
  const todoDateElement = useRef();

  const onSubmitHandler = (eve) => {
    eve.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
    onAddBtnClick(todoName, todoDate);
  };

  return (
    <>
      <form onSubmit={onSubmitHandler} className="row for-row items-container">
        <div className="col-6 ">
          <input
            ref={todoNameElement}
            className="form-control"
            type="text"
            placeholder="Enter To do here"
          />
        </div>
        <div className="col-4">
          <input
            ref={todoDateElement}
            className="form-control date-input"
            type="date"
          />
        </div>
        <div className="col-2 ">
          <button className="btn btn-success for-button">
            <RiFolderAddLine className="fs-4" />
          </button>
        </div>
      </form>
    </>
  );
}

export default AddTodo;
