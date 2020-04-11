import React from "react";

const Form = (props) => {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <input
          placeholder="What do you want to do?"
          type="text"
          name="label"
          onChange={props.onChange}
          value={props.todo_.label}
          autoFocus
          required
        />
        <button>{props.editing ? "Edit " : "Add "}a To Do</button>
      </form>
    </div>
  );
};

export default Form;
