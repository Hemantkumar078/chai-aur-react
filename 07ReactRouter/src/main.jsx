import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Home/Home.jsx'
import Header from './Header/Header.jsx'
import { BrowserRouter ,createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import About from './About/About.jsx'
import Contact from './Contact/Contact.jsx'
import User from './User/User.jsx'
import Github from './Github/Github.jsx'  
// const router=createBrowserRouter(
//   [
//     {
//       path:"/",
//       element:<App/>,
//       children:[
//         {
//           path:"",
//           element:<Home/>
//         },
//         {
//           path:"/about",
//           element:<About/>
//         },
//         {
//           path:"/contact",
//           element:<Contact/>
//         }
//       ]
//     },
//   ]
// )
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
        <Route path='' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='user/:userid' element={<User/>}/>
        <Route path='Github'  loader={ async()=>{
          const res=await fetch('https://api.github.com/users/hemantkumar078');
          if(!res.ok){
            throw new Error("Failed to fetch Github data");
          }
          return res.json();
        }} element={<Github/>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
