
import { useEffect, useState } from 'react'
//import './App.css'
import { ThemeProvider } from './Context/ThemeProvider.jsx'
import ThemeBtn from './components/Themebtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    </ThemeProvider>
  )
}

export default App
// import { useState,useContext ,useEffect} from 'react'
// import {ThemeProvider,ThemeContext} from './Context/ThemeProvider.jsx'
// import Themebtn from './components/Themebtn.jsx'
// import Card from './components/Card.jsx'
// import Themewrapper from './components/Themewrapper.jsx'
// function App() {
//   return (
//     <ThemeProvider>
//       <Themewrapper />
// <div className="flex flex-wrap min-h-screen items-center">
//                 <div className="w-full">
//                     <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
//                         <Themebtn/>
//                     </div>

//                     <div className="w-full max-w-sm mx-auto">
//                        <Card/>
//                     </div>
//                 </div>
//             </div>
//     </ThemeProvider>
//   )
// }

// export default App
