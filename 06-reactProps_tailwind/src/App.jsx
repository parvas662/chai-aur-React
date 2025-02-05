import { useState } from 'react' 
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    age:21,
    Address :"Himachal Pradesh",
  } 
  let array = ["vishu","Parvas","vishuu"]

  return (
    <>
      <h1 className='bg-green-600  '> welcome to tailwind css</h1>
      <Card username ="Vishu sharma" details={myObj} myArr={array}   />
    </>
  )
}

export default App
 