import React from 'react'
import Count from './Count'

export const Counter = (number) => {
    const [count, setCount] = React.useState(0)

    function add() {
        setCount(prevCount => prevCount + 1)
    }

    function subtract() {
        setCount(prevCount => prevCount - 1)
    }

    console.log("app component rendered")

  return (
    <div className="counter">
        <button className='counter--minus' onClick={subtract}>-</button>
        <Count number={count}/>
        <button className='counter--plus' onClick={add}>+</button>
    </div>
  )
}