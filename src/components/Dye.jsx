import React from 'react'

export const Dye = (props) => {

  const style = {
    backgroundColor: props.isHeld ? "#59E391" : "white"
  }

  return (
    <button 
      className="die-face inline-block px-4 py-2 border border-gray-300 text-gray-700 rounded"
      style={style}
      onClick={props.holdDice}
    >
        <h2 className='h-12 w-12 shadow-custom'>{props.value}</h2>
    </button>
  )
}


export const Button = (props) => {
  return (
  <button className="roll-dice rounded bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 shadow-lg transition duration-300"
          onClick={props.onClick}>
    Roll
  </button>
  )
}