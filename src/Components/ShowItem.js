import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTodoContext } from "../Provider/TodoProvider";

function ShowItem() {
  const { todoList } = useTodoContext();
  const navigate = useNavigate();
  const { id } = useParams();
  const item = todoList.find((t) => t.id === parseInt(id));
  return (
    <>
      <button onClick={() => navigate(-1)}>Back</button>
      <p>Name: {(item || {}).name}</p>
      <p>{(item || {}).email}</p>
      <p>{(item || {}).phone}</p>
      <p>{(item || {}).website}</p>
      <p>{((item || {}).company || {}).name}</p>
      <p>{((item || {}).address || {}).city}</p>
    </>
  );
}

export default ShowItem;