import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let counter=15;
  const addValue=()=>{
    counter++;
    console.log("clicked : ", Math.random(), counter);
  }
  return (
    <>
     <h1>chai aur react</h1>
     <h2> counter value : {counter} </h2>
     <button onClick={addValue}>Add value</button>
     <br/>
     <button>Remove value</button>
    </>
  )
}

export default App
