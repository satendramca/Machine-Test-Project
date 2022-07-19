import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useTodoContext } from "../Provider/TodoProvider";

const HomePage = () => {

  const { todoList, removeTodo,  } = useTodoContext();

  const onDelete = (e) => {
    console.log("I am ondelete of todo", todo);
    const newList = todoList.filter((_, index) => index !== todoIndex);
    setTodoList(newList);

  }
  return (

    <div>
      {
        todoList.map((todo, index)=>(
         
          <Card border="dark" bg="info" style={{ width: "15rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{todo}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button size="sm" variant="primary">
            More
          </Button>
          <Button size="sm" variant="danger" onClick={(e)=>onDelete()}>
            Delete
          </Button>
        </Card.Body>
      </Card>
        ))
      }
      {/* <Card border="dark" bg="info" style={{ width: "15rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Username</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button size="sm" variant="primary">
            More
          </Button>
          <Button size="sm" variant="danger" onClick={(e)=>onDelete()}>
            Delete
          </Button>
        </Card.Body>
      </Card>
      <br />
      <Card border="primary" bg="info" style={{ width: "15rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Email</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button size="sm" variant="primary">
            More
          </Button>
          <Button size="sm" variant="danger">
            Delete
          </Button>
        </Card.Body>
      </Card>
      <br />
      <Card border="primary" bg="info" style={{ width: "15rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>City</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button size="sm" variant="primary">
            More
          </Button>
          <Button size="sm" variant="danger">
            Delete
          </Button>
        </Card.Body>
      </Card> */}
    </div>
  );
};

export default HomePage;