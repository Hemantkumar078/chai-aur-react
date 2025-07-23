//import { StrictMode } from 'react'
import react from 'react'
//import { createRoot } from 'react-dom/client'
import reactDOM from 'react-dom/client'
import App from './App.jsx'
// const reactElement= {
//     type :'a',
//     props :{
//         href:'https://google.com',
//         target:'_blank'
//     },
//     children:'click me to visit this site'
// }
const anotherElement=(
  <a href='https://google.com' target='_blank'>click me to visit google</a>
)
const anotherUser='chai or code'
const reactElement=react.createElement(
  'a',
  {href:'https://google.com',target :'_blank'},
  'click me to visit google',
  anotherUser//variables injected at the end react.createElement
)
const root=reactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
   <App />
   //reactElement
  // anotherElement
  </StrictMode>,
)
