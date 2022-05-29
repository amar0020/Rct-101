import logo from './logo.svg';
import './App.css';

import {useRef , useState} from "react"
import axios from "axios"
function App() {


  const form = useRef({})

  const [data,setData] = useState([])



  const onchange = (e)=>{

    const {name,type,value} = e.target

    form.current = {...form.current, [name]:value}



  }

  const submit = (e)=>{

    e.preventDefault();


    form.current = {...form.current, ["id"]:Date.now()}

    axios.post("http://localhost:3004/post",form.current).then((e)=>form.current={})

    

  }
  return (
    
    <div>
      <form action="" onSubmit={submit}>
      <div>
      <label htmlFor="" />{"Employee Name :" }
      <input type="text"  name='Name' onChange={onchange}/>
      </div>
      <div>
      <label htmlFor="" />{"Age :" }
      <input type="text" name='Age' onChange={onchange} />
      </div>

      <div>

      <label htmlFor="" />{"Address :" }
      <input type="text" name='Address' onChange={onchange} />
      </div>

      <div>
      <label htmlFor="" />{"Department :   " }
      <select id="" name='Department' onChange={onchange}>
        <option value="Intructor">Dept</option>
        <option value="IA">IA</option>
        <option value="EC">EC</option>
        <option value="Manager">Manager</option>
        <option value="CTO">CTO</option>
      </select>
      </div>
      <div>
      <label htmlFor="" />{"Salary :" }
      <input type="text" name='Salary' onChange={onchange} />
      </div>
      <div>
      <label htmlFor="" />{" Marital Status:" }
      <input type="radio" name='mstatus' onChange={onchange} value="married"/> Marrried<input type="radio" name='mstatus' value='unmarried' onChange={onchange} />Unmarried
      <div>
      <button>Submit</button>
      </div>
      </div>
      </form>
      
    </div>
  );
}

export default App;
