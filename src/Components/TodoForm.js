import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTodoContext } from "../Provider/TodoProvider";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const TodoForm = () => {
  const { getNumberOfTodoItem, addTodo } = useTodoContext();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!name || !user || !email || !city || !phone || !company || !website) {
      return;
    }

    const id = Math.floor(Math.random() * 10000) + 11;
    addTodo({
      id,
      name,
      username: user,
      email,
      address: { city },
      phone,
      company: { name: company },
      website,
    });

    setName("");
    setUser("");
    setEmail("");
    setCity("");
    setPhone("");
    setCompany("");
    setWebsite("");

    navigate("/");
  };
  return (
    <div className="container">
      <Form onSubmit={handleOnSubmit}>
        <h2>User Information</h2>
        <hr />
        <br />
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="user"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              placeholder="Enter Username"
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter Phone"
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Company Name</Form.Label>
          <Form.Control
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Enter Company Name"
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Website</Form.Label>
            <Form.Control
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </Form.Group>
        </Row>
        <br />

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default TodoForm;
