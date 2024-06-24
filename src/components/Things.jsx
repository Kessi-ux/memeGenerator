import React from 'react'

export const Things = () => {

    const [isArray, setIsArray] = React.useState(["Things 1", "Things 2"])

    function addItem() {
        setIsArray(prevThingsArray => {
            return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]
        })
    }

    const thingsElements = isArray.map(thing => <p key={thing}>{thing}</p>)

  return (
    <div>
        <button onClick={addItem}>Add Item</button>
            {thingsElements} 
    </div>
  )
}