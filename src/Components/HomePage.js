import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";

import { useTodoContext } from "../Provider/TodoProvider";

const HomePage = () => {
  const navigate = useNavigate();
  const { todoList, removeTodo, getAllData } = useTodoContext();

  const onDelete = (item) => {
    const index = todoList.indexOf(item);
    removeTodo(index);
  };

  const handleShow = (item) => {
    navigate(`/ShowItem/${item.id}`);
  };

  return (
    <div>
      <NavBar />
      <br />
      <Container>
        <Row>
          {(todoList || []).map((todo, index) => (
            <Col md={4}>
              <Card border="dark" bg="info" style={{ width: "26rem" }}>
                <Card.Body>
                  <Card.Title>Username : {todo.username}</Card.Title>
                  <Card.Text>
                    <p>Email : {todo.email}</p>
                    <p>City : {(todo.address || {}).city}</p>
                  </Card.Text>
                  <Button
                    size="sm"
                    variant="primary"
                    onClick={() => handleShow(todo)}
                  >
                    More
                  </Button>
                  <Button
                    size="sm"
                    variant="danger"
                    onClick={() => onDelete(todo)}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
              <br />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;