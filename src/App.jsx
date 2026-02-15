import { useState } from 'react'
import './App.css'

function App() {
  const[count, setCount] = useState(0)
  const [data,setData] =useState([])
  function add(){
    setData([...data,count])
    setCount("")
  }

  
}
