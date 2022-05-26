import { useState } from "react"

import TodoList from "./TodoList"

const Todo=()=>{

    const [text,setText] = useState("")
    
    const [list, setList] = useState([])

    const [status,setStatus] = useState(false)

    const [complete,setComplete] = useState([])

    const handleChange = (e)=>setText(e.target.value)

    const handlechange1 = (e)=>{

        const newList= list.filter((item)=>{
           return item.id!=e.target.id
         })
 
        setList([...newList])

        const completeTodo = {id:e.target.id,value:e.target.value}

        console.log(complete)

        setComplete([...complete,completeTodo])

     }


    return (

        <div>
            <input type="text"  onChange={handleChange} /><button onClick={()=>setList([...list,{id:Date.now(),value:text}])}>+</button>
            <TodoList list={list} setList={setList} handlechange1={handlechange1}></TodoList>
            <button onClick={()=>setStatus(!status)}>Show Completed Todo</button>
            {status ? complete.map((e)=>(<h1 style={{color:"green",textDecoration:"line-through"}}>{e.value}</h1>)):null}
        </div>
    )
}

export default Todo