import {Todo} from "../Todo.ts";

type Props = {
    todo: Todo,
}

function TodoCard(props: Props) {
    return (
        <div>
            {props.todo.description}
        </div>
    );
}

export default TodoCard;