import { useState } from 'react'
import Button from './components/Button'
function App() {
  const [color, setColor] = useState('olive');
  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
         <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <Button color="red"  setColor={setColor}/>
          <Button color="blue" setColor={setColor}/>
          <Button color="green" setColor={setColor}/>
          <Button color="yellow" setColor={setColor}/>
          <Button color="purple" setColor={setColor}/>
          <Button color="pink" setColor={setColor}/>
          <Button color="black" setColor={setColor}/>
         </div>
      </div>
    </div>
  )
}

export default App
