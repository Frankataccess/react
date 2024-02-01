import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let name = "Frank";

  return (
   <> 
     <h1>Hello {name} </h1>
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam magnam commodi animi libero, dolor cumque ut fugiat dolorem ex ab esse excepturi quo beatae exercitationem non corporis vel veniam quos!</p>
   </> 
   )
}

export default App
