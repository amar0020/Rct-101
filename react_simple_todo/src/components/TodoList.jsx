import TodoItem from "./TodoItem"

const TodoList = ({list})=>{

    return (
        <div>
            {list.map((item)=><TodoItem item={item}></TodoItem>)}
        </div>
    )
}

export default TodoList