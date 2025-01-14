import {Todo} from "../Todo.ts";

type Props = {
    todo: Todo,
}

function TodoCard(props: Props) {
    return (
        <div className="todo-card">
            {props.todo.description}
        </div>
    );
}

export default TodoCard;