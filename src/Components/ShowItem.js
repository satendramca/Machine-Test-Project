import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTodoContext } from "../Provider/TodoProvider";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ShowItem() {
  const { todoList } = useTodoContext();
  const navigate = useNavigate();
  const { id } = useParams();
  const item = todoList.find((t) => t.id === parseInt(id));
  return (
    <div className="div-container">
      <br />
      <br />
      <Card
        style={{ width: "45rem", height: "35rem" }}
        className=" bg-dark text-white"
      >
        <Card.Body>
          <p>Name : {(item || {}).name}</p>
          <hr />
          <p>Username : {(item || {}).username}</p>
          <hr />
          <p>Email : {(item || {}).email}</p>
          <hr />
          <p>City : {((item || {}).address || {}).city}</p>
          <hr />
          <p>Phone : {(item || {}).phone}</p>
          <hr />
          <p>Company : {((item || {}).company || {}).name}</p>
          <hr />
          <p>Website : {(item || {}).website}</p>
          <hr />
        </Card.Body>
        <Button variant="primary" onClick={() => navigate(-1)}>
          Back
        </Button>
      </Card>
    </div>
  );
}

export default ShowItem;