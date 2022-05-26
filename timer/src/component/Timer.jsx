import { useEffect, useState } from "react"

const Timer = ()=>{


    const [watch,setWatch] = useState(0)

    const [time,setTime] = useState(null)

    const start = ()=>{

        if(!time){
            const id=setInterval(() => {

                setWatch((prev)=>prev+1)
                
                
            }, 1000);

            setTime(id)
            
        }
       
    }

    const pause = ()=>{
        clearInterval(time)
        setTime(null)
    }

    const reset=()=>{
        setWatch(0)
        if(!time){
            const id=setInterval(() => {

                setWatch((prev)=>prev+1)
                
                
            }, 1000);

            setTime(id)
            
        }
        }

        useEffect(()=>{
            return ()=>clearInterval(time)
        },[])
    return<>
        <div>{watch}</div>
        <button onClick={()=>start()}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reset}>Reset</button>
    </>
}

export default Timer