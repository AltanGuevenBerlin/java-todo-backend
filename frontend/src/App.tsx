import './App.css'
import TodoCard from "./components/TodoCard.tsx";
import {Todo} from "./Todo.ts";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {

    const [todos , setTodos] = useState<Todo[]>()

    useEffect(
        () => {
            axios.get("api/todo")
            .then(response => {
                setTodos(response.data)
        })
    }, []
    )

    if(!todos){
        return "Lade ..."
    }

  return (
    <>
        <h1>To Do`s</h1>
        {
            todos.map(todo => <TodoCard todo={todo} key={todo.id} />)
        }
    </>
  )
}

export default App