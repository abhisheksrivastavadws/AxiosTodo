import { useState } from "react";
import "./App.css";
import Header from "./Axios/Header";
import Todos from "./Axios/Todos";
import axios from "axios";

export default function App() {
  // Jtiy, Using Axios inside useState, seems good & useState is the first thing that runs before useEffect. But ideally useEffect is used for condition based rendering ( entry of new Data) or timer 
  const [todoTask, setTodos] = useState([
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => setTodos(response.data)),
  ]);
  {
    console.log(todoTask);
  }

  const onDelete = (todoNew) => {
    setTodos(
      todoTask.filter((e) => {
        return e !== todoNew;
      })
    );
  };
// what will happen if API fails with 504  error, 50x error , 404 error , 401 error , empty data. Error handling need to be done. 
  return (
    <div>
      <Header title="My Todos" />
      {/* <Todos todo={todoTask} /> */}
      {/* {console.log(todoTask)} */}
      <Todos todo={todoTask} onDelete={onDelete} />
    </div>
  );
}
