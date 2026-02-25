import { useState } from 'react'
import './App.css'

function App() {
  const[count, setCount] = useState(0)
  const [data,setData] =useState([])
  function add(){
    setData([...data,count])
    setCount("")
  }

  

return<>
  <input type="text" value={count} onChange={(e)=>setCount(e.target.value)}></input>
<button onClick={add}>Add</button>
<button onClick={()=>setData([])}>Clear</button>
<ul>{data.map((item,index)=>{return <li>{item}<button onClick={()=>setData(data.filter((_,i)=>i!==index))}> <img src="/2316149-200.png" width="10"></img></button></li>})}</ul>
  

  </>

}
export default App;