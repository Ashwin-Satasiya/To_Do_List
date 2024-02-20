import { createContext } from "react";
export const todoItemsContext = createContext([]);
import { useReducer } from "react";


const todoReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;

  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      { name: action.payload.itemName, date: action.payload.itemDate },
      ...currTodoItems,
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item) => item.name !== action.payload.deleteItemName
    );
  }

  return newTodoItems;
};

const ContainerComp = ({ children }) => {
  const [todoItems, todoItemsDispatch] = useReducer(
    todoReducer,
    []
  );

  const onAddBtnClick = (todoName, todoDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName: todoName,
        itemDate: todoDate,
      },
    };
    todoItemsDispatch(newItemAction);
  };

  const onDeleteBtnClick = (deleteItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        deleteItemName,
      },
    };
    todoItemsDispatch(deleteItemAction);
  };

  return (
    <todoItemsContext.Provider
      value={{ todoItems, onAddBtnClick, onDeleteBtnClick }}
    >
      <div className="todoMain-container">{children}</div>;
    </todoItemsContext.Provider>
  );
};

export default ContainerComp;
