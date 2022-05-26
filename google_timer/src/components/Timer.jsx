
import { useState , useEffect, useRef} from "react"
const Timer = ()=>{

    const [text,setText] = useState(0)

    const [show,setShow] = useState(true)

    const intial = useRef()

    const [time, setTime] = useState(null)


    const secondsToTime=(e)=>{

        if(e<="0"){
            clearInterval(time)
            return "Time is over"
        }
        var h = Math.floor(e / 3600).toString().padStart(2,'0'),
            m = Math.floor(e % 3600 / 60).toString().padStart(2,'0'),
            s = Math.floor(e % 60).toString().padStart(2,'0');
        
        return (h + ':' + m + ':' + s);
    }

    const start = ()=>{

        if(text>0)
        setShow(false)

        
        
        if(!time){
            const Time = setInterval(()=>{
                setText((prev)=>prev-1)
                console.log(text)
            },1000)

            setTime(Time)
            
        }

        

    }

    const reset = ()=>{
        
        setText(intial.current)


    }
    const pause = ()=>{

        clearInterval(time)
        setTime(null)


    }

    const setall=()=>{
        clearInterval(time)
        setTime(null)
        setShow(true)
    }


    return (
        <>
            <div>{show ? <><input type="number" onChange={(e)=>{
                intial.current = e.target.value
                setText(e.target.value)
            } }/><label>secs</label></> : <h1 onClick={setall}>{secondsToTime(text)}</h1>}</div>

            <button onClick={start}>start</button>
            <button onClick={reset}>Reset</button>
            <button onClick={pause}>Pause</button>

        </>
    )


}

export default Timer