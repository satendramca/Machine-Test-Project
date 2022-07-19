import React from "react";
import { Button } from "react-bootstrap";

const UserProfile = () => {
  function sayHello() {
    alert("hiii");
  }

  return (
    <div>
      <h1>UserProfile Components</h1>
      <Button onClick={sayHello}>Click Me</Button>
    </div>
  );
};

export default UserProfile;
