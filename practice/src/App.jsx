import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const countries=[
  { name:'india',value:'IN',cities:[
    'Delhi',
    'Mumbai'
  ]
  },
  { name:'Pak',value:'PK',cities:[
    'Lahore',
    'Karachi'
  ]
  },
  { name:'Bangladesh',value:'BG',cities:[
    'Dhaka',
    'Chittagong'
  ]
  },
]
function App() {
  const [showbtn,setShowbtn]=useState(false);
  return (
   <div>
    <div>
    <li>
      <input type='checkbox' onChange={}></input>
    </li>
    </div>
   </div>
  )
}

export default App
