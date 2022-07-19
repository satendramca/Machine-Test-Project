import logo from "./logo.svg";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import NavBar from "./Components/NavBar";
import TodoProvider from "./Provider/TodoProvider";
import TodoList from "./Components/TodoList";
import TodoForm from "./Components/TodoForm";
import HomePage from "./Components/HomePage";
import UserProfile from "./Components/UserProfile";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <TodoProvider>
          <TodoForm />
          <TodoList />
          <HomePage />
        </TodoProvider>

        <Routes>
          <Route path="/userDetails" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>

      {/* <NavBar/> */}
      {/* <UserProfile/> */}

      {/* <TodoProvider>
        <TodoForm/>
        <TodoList/>
      <HomePage/>
      </TodoProvider> */}
    </div>
  );
}

export default App;
