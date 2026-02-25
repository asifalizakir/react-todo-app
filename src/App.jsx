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

  </>

}
export default App;