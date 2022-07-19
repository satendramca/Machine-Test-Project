import React from "react";
import { useTodoContext } from "../Provider/TodoProvider";
import Button from "react-bootstrap/Button";

const TodoList = () => {
  const { todoList, removeTodo } = useTodoContext();

  return (
    <div>
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>
            {todo}
            {/* <Button variant="danger" size='sm' onClick={()=> removeTodo(index)}>Delete Me</Button>{' '} */}
            <Button size="sm" onClick={() => removeTodo(index)}>
              Delete Me
            </Button>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
