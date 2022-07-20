import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

const initialTodoListState = [" "];

const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState(initialTodoListState);

  const getNumberOfTodoItem = () => todoList.length;

  const addTodo = (newTodoItem) => {
    setTodoList([newTodoItem, ...todoList]);
  };

  const getAllData = () => {
    console.log('---getAllData---');
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(
        (result) => {
          setTodoList(result);
        },
        (error) => {
          console.error(error);
        }
      )
  };

  const removeTodo = (todoIndex) => {
    const newList = todoList.filter((_, index) => index !== todoIndex);
    setTodoList(newList);
  };

  const contextValue = {
    getAllData,
    todoList,
    getNumberOfTodoItem,
    addTodo,
    removeTodo,
  };

  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);

export default TodoProvider;
