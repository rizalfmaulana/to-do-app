import React from "react";
import { FaTrash, FaPen } from "react-icons/fa";

function TodoItem(props) {
  return (
    <div className="item">
      <li>{props.item}</li>
      <div>
        <button onClick={() => props.editItem(props.id)}>
          <FaPen />
        </button>
        <button onClick={() => props.removeItem(props.id)}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
