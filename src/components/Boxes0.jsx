import React from 'react'
import boxes from "./boxes"
import { Box } from './Box'


export const Boxes = (props) => {
    const [square, setSquare] = React.useState(boxes)    
    
    function toggle(id){
      setSquare(prevSquares => {
         const newSquares = []
         for (let i = 0; i < prevSquares.length; i++) {
          const currentSquare = prevSquares[i]
          if(currentSquare.id === id) {
            const updatedSquare = {
              ...currentSquare,
              on: !currentSquare.on
            }
            newSquares.push(updatedSquare)
          } else {
            newSquares.push(currentSquare)
          }
         }
         return newSquares
      }
      )}

    // const styles = {
    //     backgroundColor: props.darkMode ? "#222222" : "#cccccc"
    // }
    
    const squareElements = square.map(square => (
      <Box on={square.on} key={square.id} toggleClick={toggle} id={square.id} />
    ))

    

  return (
    <div>
        {squareElements }
    </div>
  )
}
