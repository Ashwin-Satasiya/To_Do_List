import { useContext } from "react";
import { todoItemsContext } from "../store/todo-Items-store";
import ItemLists from "./ItemLists";

function TodoItem({onDeleteBtnClick }) {
const {todoItems} = useContext(todoItemsContext);

return (
    <div className="items-container">
    {todoItems.map((item, index) => <ItemLists key={index} todoName={item.name} todoDate={item.date}  onDeleteBtnClick={onDeleteBtnClick} />)}                      
    </div>
  );  
}

export default TodoItem;
