import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";

import { useTodoContext } from "../Provider/TodoProvider";

const HomePage = () => {
  const { todoList, removeTodo, getAllData } = useTodoContext();

  const onDelete = (item) => {
    const index = todoList.indexOf(item);
    removeTodo(index);
  };

  useEffect(() => {
    getAllData();
  }, []);

  const [show, setShow] = useState(false);
  const [itemForDisplay, setItemForDisplay] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = (item) => {
    setShow(true);
    setItemForDisplay([item]);
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{(itemForDisplay[0] || {}).username}</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <p>{(itemForDisplay[0] || {}).name}</p>
          <p>{(itemForDisplay[0] || {}).email}</p>
          <p>{(itemForDisplay[0] || {}).phone}</p>
          <p>{(itemForDisplay[0] || {}).website}</p>
          <p>{((itemForDisplay[0] || {}).company || {}).name}</p>
          <p>{((itemForDisplay[0] || {}).address || {}).city}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {(todoList || []).map((todo, index) => (
        <Card border="dark" bg="info" style={{ width: "15rem" }}>
          <Card.Body>
            <Card.Title>Username: {todo.username}</Card.Title>
            <Card.Text>
              <p>Email: {todo.email}</p>
              <p>City: {(todo.address || {}).city}</p>
            </Card.Text>
            <Button
              size="sm"
              variant="primary"
              onClick={() => handleShow(todo)}
            >
              More
            </Button>
            <Button size="sm" variant="danger" onClick={() => onDelete(todo)}>
              Delete
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default HomePage;
