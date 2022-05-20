import { useState } from "react"

import TodoList from "./TodoList"

const Todo=()=>{

    const [text,setText] = useState("")
    
    const [list, setList] = useState([])

    const handleChange = (e)=>setText(e.target.value)


    return (

        <div>
            <input type="text"  onChange={handleChange} /><button onClick={()=>setList([...list,text])}>+</button>
            <TodoList list={list}></TodoList>
        </div>
    )
}

export default Todo