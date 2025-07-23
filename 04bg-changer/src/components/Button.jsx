import React from 'react'
function Button({color, setColor}) {
  return (
          <button
          onClick={() => setColor(color)}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: color}}
          >Red</button>
  )
}

export default Button