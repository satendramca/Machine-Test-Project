import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import TodoProvider from "./Provider/TodoProvider";
import TodoForm from "./Components/TodoForm";
import HomePage from "./Components/HomePage";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TodoProvider>
          <TodoForm />
          <HomePage />
        </TodoProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
