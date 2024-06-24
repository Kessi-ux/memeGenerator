import React from "react"
// import React { useState, useEffect} from "react"

export const StarWars = () => {
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(0)

    console.log("Component rendered")

    // side effects
    React.useEffect(function(){
        console.log("Effect ran")
        // fetch("https://swapi.dev/api/people/" + count)
        fetch(`https://swapi.dev/api/people/${count}`)
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => setStarWarsData(data))
    // }, [])
    }, [count])
            
    return (
    <div>
        <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        <h2>The count is {count}</h2>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
    </div>
  )
}
