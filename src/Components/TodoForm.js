import React, { useState } from "react";
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
        <h3>Number Of Todo Items : {getNumberOfTodoItem()}</h3>

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
        <button className="btn-color" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TodoForm;
