import { AiOutlineDelete } from "react-icons/ai";

import { todoItemsContext } from "../store/todo-Items-store";
import { useContext } from "react";

const ItemLists = ({ todoName, todoDate}) => {
  
 const {onDeleteBtnClick} = useContext(todoItemsContext);

  return (
    <div className="row for-row">
      <div className="col-6 ">{todoName}</div>
      <div className="col-4 "> {todoDate} </div>
      <div className="col-2 ">
        <button onClick={()=> onDeleteBtnClick(todoName)} className="btn btn-danger for-button"><AiOutlineDelete className="fs-4" /></button>
      </div>
    </div>
  );
};

export default ItemLists;
