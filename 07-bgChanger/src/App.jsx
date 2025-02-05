import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("white")

  function changeColor(newcolor) {
    setColor(newcolor)
  }
  return (
    <div className='w-full h-screen' style={{ backgroundColor: color }} >

      <div className='flex flex-col justify-around items-center pt-10 h-screen  ' style={{ color: color === "black" || color == "blue" || color == "red"  ? "white" : "black" }}>
        <h1 className='text-3xl font-extrabold '> Welcome to BackGround Changer </h1>
        <div className='flex w-max flex-wrap justify-center gap-3 shadow-lg bg-white px-3  py-2 rounded-4xl'>
          <button onClick={function () {
            changeColor('red')
          }}
            className=' bg-red-700 text-white  w-24 h-8 outline-none rounded-4xl'> Red </button>

          <button onClick={() => { changeColor('black') }} className=' bg-black text-white rounded-4xl w-24 h-8 outline-none'> Black </button>

          <button onClick={() => { changeColor('violet') }} className=' bg-violet-800 text-white rounded-4xl w-24 h-8 outline-none'> violet </button>

          <button onClick={() => { changeColor('yellow') }} className=' bg-yellow-700 text-white rounded-4xl w-24 h-8 outline-none'> Yellow </button>

          <button onClick={() => { changeColor('green') }} className=' bg-green-700 text-white rounded-4xl w-24 h-8 outline-none'> Green </button>

          <button onClick={() => { changeColor('grey') }} className=' bg-gray-700 text-white rounded-4xl w-24 h-8 outline-none'> Gray </button>

          <button onClick={() => { changeColor('blue') }} className=' bg-blue-700 text-white rounded-4xl w-24 h-8 outline-none'> Blue </button>

        </div>
      </div>

    </div>
  )
}

export default App
