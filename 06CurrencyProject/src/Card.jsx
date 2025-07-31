import React from 'react'

function Card({increment}) {
    console.log("Card rendered");
  return (
    <div onClick={increment}>Card</div>
  )
}

export default Card