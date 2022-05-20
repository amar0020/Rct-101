import { useState } from "react"

const Counter = ({x})=>{

const [state, setState] = useState(x)
console.log(state) 

    
return (
    <div>
        
        <h1 style={{color:`${state%2===0 ? "red": "green"}`}}>{state}</h1>
        <button onClick={()=>setState(state+1)}>Increase</button>
        <button onClick={()=>setState(state-1)}>Decrease</button>
        <button onClick={()=>setState(state*2)}>Multiply</button>

    </div>
)
}
export default Counter