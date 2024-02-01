import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar'

function App() {
  const [count, setCount] = useState(0)

  let name = "DAVE";

  const handleclick = () => {
    alert("Hello " + name);
  }

  return (
   <> 
   <Navbar/>
     <h3>MY NAME A {name} </h3>
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam magnam commodi animi libero, dolor cumque ut fugiat dolorem ex ab esse excepturi quo beatae exercitationem non corporis vel veniam quos!</p>

     <button onClick={() => handleclick ("DAVE")}>Click me</button>
   </>
   )
}

export default App;
