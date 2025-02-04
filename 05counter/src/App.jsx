import { useState } from 'react'  
import Hello from './components/Counter'
import ItemList from './components/diffing'

function App() {
  const [count, setCount] = useState(0)
  function increment(){
    if (count >=20){
      console.log(count)
      setCount(0)
    }
    else{
      console.log(count)
      setCount(count => count+1)  // used when state is depended on previous state.
    }
  }
  function decrement(){ 
    if (count <=0){
      setCount(0)
      console.log(count)
    }
    else{
      setCount(count-1)
      console.log(count)
      }
  }
  return (
    <>
      <h1>my Counter App</h1>
      <p> Counter will go from 0 to 20 </p>
      <h1>Count is {count}</h1>
      <button onClick={increment}> incCounter {count}</button>
      <br />
      <button onClick = {decrement}> decCounter {count}</button>
      <Hello/> 
      <ItemList/>

    </>
  )
}

export default App
