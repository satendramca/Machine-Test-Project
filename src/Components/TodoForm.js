import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { useTodoContext } from "../Provider/TodoProvider";

const TodoForm = () => {
  const { getNumberOfTodoItem, addTodo } = useTodoContext();
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!user || !email || !city) {
      return;
    }

    addTodo({ username: user, email, address: { city } });

    setUser("");
    setEmail("");
    setCity("");
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <h3>Number of todo items: {getNumberOfTodoItem()}</h3>

        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder=" Enter Username"
        ></input>
        <br />
        <br />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
        ></input>
        <br />
        <br />
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder=" Enter City"
        ></input>
        <br />
        <br />
        <Button size="sm" variant="primary" type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default TodoForm;
