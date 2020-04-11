import React from "react";
import Form from "./Form";
import Todo from "./Todo";
import useToDoState from "./useToDoState";

const ManageTodo = () => {
  const {
    todo,
    todos,
    editing,
    handleChange,
    handleSubmit,
    handleTodo,
  } = useToDoState();

  

  return (
    <div>
      <h1>To Do List</h1>
      <Form
        todo_={todo}
        editing={editing}
        onSubmit={handleSubmit}
        onChange={handleChange}
      />
      {todos.length !== 0 ? (
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Label</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((_todo) => (
              <Todo key={_todo.id} todoActions={handleTodo} todo={_todo} />
            ))}
          </tbody>
        </table>
      ) : (
        <h1>No To Do :D</h1>
      )}
    </div>
  );
};

export default ManageTodo;
