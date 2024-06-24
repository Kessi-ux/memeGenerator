import React from 'react'
import boxes from "./boxes"
import { Box } from './Box'


export const Boxes = (props) => {
    const [square, setSquare] = React.useState(boxes)    
    
    function toggle(id){
      setSquare(prevSquares => {
         return prevSquares.map((square) => { 
            return square.id === id ? {...square, on: !square.on} : square
         }) 
         }) 
        }

    // const styles = {
    //     backgroundColor: props.darkMode ? "#222222" : "#cccccc"
    // }
    
    const squareElements = square.map(square => (
      <Box on={square.on} 
           key={square.id} 
           toggleClick={() => toggle (square.id)} 
          //  id={square.id} 
           />
    ))

    

  return (
    <div>
        {squareElements }
    </div>
  )
}
