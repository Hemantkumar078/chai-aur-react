import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Link, Outlet } from 'react-router-dom'
import Header from './Header/Header.jsx'
import Footer from './Footer/Footer.jsx'
function App() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
