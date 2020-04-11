import React from "react";

const Todo = (props) => {
  const handleClick = (event) => {
    props.todoActions(props.todo, event.target.id);
  };
  return (
    <tr>
      <td
        style={
          props.todo.isComplete ? { textDecoration: "line-through" } : null
        }
      >
        {props.todo.id}
      </td>
      <td
        style={
          props.todo.isComplete ? { textDecoration: "line-through" } : null
        }
      >
        {props.todo.label}
      </td>
      <td>
        <button id="completed" onClick={handleClick}>
          {props.todo.isComplete ? "Uncompleted" : "Complete"}
        </button>
        <button id="edit" onClick={handleClick}>
          Edit
        </button>
        <button id="delete" onClick={handleClick}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Todo;