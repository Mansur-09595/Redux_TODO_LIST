import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import AddFrom from "./components/AddFrom";
import TodoList from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  
  const handleClick = () => {
    if(todo) {
      dispatch({
        type: "ADD_TODO",
        payload: {
          label: todo,
          id: Math.ceil(Math.random() * 100),
        },
      });
      setTodo("");
    }
  };

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  const handleDelete = (id) => {
    dispatch({
      type: "REMOVE_TODO",
      payload: id,
    });
  };

  return (
    <div className="form">
      <AddFrom todo={todo} handleChange={handleChange} handleClick={handleClick}/>
      <TodoList todos={todos} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
