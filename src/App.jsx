import React from 'react'
import { Button, Dye } from './components/Dye'
import { nanoid } from "nanoid"
import Confetti from 'react-confetti'

function App() {

    const [dice, setDice] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)

    React.useEffect(()=> {
      const allHeld = dice.every(dye => dye.isHeld)
      const firstValue = dice[0].value
      const allSameValue = dice.every(dye => dye.value === firstValue)
      if (allHeld && allSameValue) {
        setTenzies(true)
        console.log("You won")
      }
    }, [dice])


    function generateNewDye() {
      return {
        value: Math.ceil(Math.random()*6),
          isHeld: false,
          id: nanoid()
      }
    }
    
    function allNewDice() {
      const newDice = []
      for (let i = 0; i < 10; i++) {
        newDice.push(
          generateNewDye()
      )}
       return newDice
    }

    function rollDice(){
      if (!tenzies) {
        setDice(oldDice => oldDice.map(dye => {
          return dye.isHeld ?
            dye : 
            generateNewDye()
        }))
      } else {
        setTenzies(false)
        setDice(allNewDice())
      }
      }

    function holdDice(id){
      setDice(oldDice => oldDice.map(dye => {
        return dye.id === id ? 
          {...dye, isHeld: !dye.isHeld } :
            dye
      }))
    }

      const diceElements = dice.map(dye => 
          <Dye key={dye.id} value={dye.value} isHeld={dye.isHeld} holdDice={()=> holdDice(dye.id)} />
        )

    return (
       <>
        {tenzies && <Confetti />}
       <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
          <h1>Tenzies</h1>
          <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls</p>
          <div className='grid grid-rows-2 grid-cols-5 gap-4 mb-4'>
              {diceElements}
          </div>
          <Button
            onClick={rollDice}
            text={tenzies ? "New Game" : "Roll"}
          />
        </div>
      </>
    )
  }
  
  export default App
  