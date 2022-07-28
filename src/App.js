import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import TodoProvider from "./Provider/TodoProvider";
import TodoForm from "./Components/TodoForm";
import HomePage from "./Components/HomePage";
import ShowItem from "./Components/ShowItem";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TodoProvider>
          <Routes>
            {/* <Route path="/" element={<NavBar />}></Route> */}
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/TodoForm" element={<TodoForm />}></Route>
            <Route path="/ShowItem/:id" element={<ShowItem />}></Route>
          </Routes>
        </TodoProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;