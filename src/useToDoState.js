import { useState , useEffect } from "react";

const useToDoState = () => {
  const initTodo = {
    id: -1,
    label: "",
    isComplete: false,
  };

  const [todo, setTodo] = useState(initTodo);
  const [todos, setTodos] = useState([]);
  const [editing, setEditing] = useState(false);

  const handleChange = (event) => {
    const tempTodo = { ...todo, [event.target.name]: event.target.value };
    setTodo(tempTodo);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!editing && todo.id === -1) {
      const aTodo = {
        id: todos.length + 1,
        label: todo.label,
        isComplete: false,
      };
      console.log("Add", aTodo);
      setTodos([...todos, aTodo]);
    } else {
      const newTodos = todos.map((_todo) =>
        todo.id === _todo.id ? todo : _todo
      );
      setTodos(newTodos);
    }
    setTodo(initTodo);
    setEditing(false);
  };

  const deleteTodo = (deletedTodo) => {
    console.log("DELETE", deletedTodo);
    const newTodos = todos.filter((t) => deletedTodo !== t);
    setTodos(newTodos);
  };
  const markAsComplete = (selectedTodo) => {
    const newTodos = todos.map((_todo) =>
      _todo.label === selectedTodo.label
        ? { ..._todo, isComplete: !_todo.isComplete }
        : _todo
    );
    console.log(newTodos);
    console.log("TODO STATE IS TOGGLED");
    setTodos(newTodos);
  };

  const handleTodo = (selectedTodo, action) => {
    if (action === "edit") {
      setEditing(true);
      setTodo(selectedTodo);
    }
    if (action === "completed") {
      markAsComplete(selectedTodo);
    }
    if (action === "delete") {
      deleteTodo(selectedTodo);
    }
  };

  useEffect(() =>
  {
    return;
  }, [editing]);

  return { todo, todos, editing, handleChange, handleSubmit, handleTodo };
};

export default useToDoState;
