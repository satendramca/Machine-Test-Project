import React, { useState } from "react";
import { useTodoContext } from "../Provider/TodoProvider";

const TodoForm = () => {
  const { getNumberOfTodoItem, addTodo } = useTodoContext();
  const [todoItem, setTodoItem] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!todoItem) {
      return;
    }

    addTodo(todoItem);

    setTodoItem("");
    // console.log("new todo =>", todoItem);
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <h3>Number of todo items: {getNumberOfTodoItem()}</h3>
        <input
          type="text"
          value={todoItem}
          onChange={(e) => setTodoItem(e.target.value)}
          placeholder="enter username"
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TodoForm;
