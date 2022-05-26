import TodoItem from "./TodoItem"

const TodoList = ({list,handlechange1})=>{

    

    return (
        <div onChange={handlechange1}>
            {list.map((item)=><TodoItem item={item}></TodoItem>)}
        </div>
    )
}

export default TodoList