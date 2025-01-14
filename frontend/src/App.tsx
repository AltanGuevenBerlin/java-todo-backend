import './App.css'
import TodoCard from "./components/TodoCard.tsx";
import {Todo} from "./Todo.ts";

function App() {

    const todos: Todo[] = [
        {
            "id": "abcd1234",
            "description": "cleaning",
            "status": "OPEN"
        },
        {
            "id": "bcde2345",
            "description": "gaming",
            "status": "OPEN"
        }
    ]

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