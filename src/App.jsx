import { useState } from 'react'
import './App.css'
import HeadNav from './Head-Nav'
import { Routes,Route , Navigate, Link} from 'react-router-dom'
import FrontPage from './FrontPage'

function App() {
  const [count, setCount] = useState(0)
  const [token,setToken] = useState(localStorage.getItem("token"));
  console.log("token in app.jsx",token);

  return (
    <div className="App">
      <HeadNav setToken={setToken}/>
      <FrontPage setToken={setToken} token={token}/>
      
    </div>
  )
}

export default App
