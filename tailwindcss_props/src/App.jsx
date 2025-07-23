import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  let myobj1={
    serial_no: '#786',
    price: '₹ 1000'
  }
  let myobj2={
    serial_no: '#687',
    price: '500'
  }
  return (
    <>
      <h1 className='bg-green-400 bm-4'>Tailwind Test</h1>
      <Card username="hitesh" obj={myobj1} />
      <Card username="hemant" obj={myobj2} />
    </>
  )
}
export default App
