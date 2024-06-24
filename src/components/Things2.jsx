import React from 'react';
import ReactDOM from 'react-dom';

export const Things = () => {
    const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])
    // const thingsArray = ["Thing 1", "Thing 2"]
    // const mappedArray = thingsArray.map(
    //     function(item){
    //         return item
    //     }
    // )

    function addItem() {
        // const newThingText = `Thing ${things.length + 1}`
        // setThings(prevState => [...prevState, newThingText])
        // console.log(things)
        setThingsArray(prevThingsArray => {
            return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]
        })
    }
        
    // function addItem() {
    //     const newThingText = `Thing ${thingsArray.length + 1}`
    //     thingsArray.push(newThingText)
    //     console.log(thingsArray)
    // }

    // const mappedArray = thingsArray.map( thing => <p key={thing}>{thing}</p>)
    
    const mappedArray = things.map( thing => <p key={thing}>{thing}</p>)


    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {mappedArray}       
        </div>
  )
}

export const Greet = () => {
    
    // const result = React.useState("Yes")

    const [isImportant, setIsImportant] = React.useState("Yes")
    const [count, setCount] = React.useState(0)

    function add(){
        setCount(count+1)
    }

    function minus(){
        setCount(count-1)
    }


    function handleClick(){
        setIsImportant("No")
    }

    // function greeting(name){
    //     const date = new Date()
    //     const hours = date.getHours()
        

    //     let timeOfDay

    //     if(hours >= 4 && hours <12){
    //         timeOfDay = "morning"
    //     }else if (hours >= 12 && hours < 17) {
    //         timeOfDay = "afternoon"
    //     }else if (hours >= 17 && hours < 20) {
    //         timeOfDay = "evening"
    //     }else {
    //         timeOfDay = "night"
    //     }

    //     return `Good ${timeOfDay}, ${name}`
    // }

    // console.log(greeting("Victor"))

    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)

    
    return(
        <>
          {/* <p>{result[0]}</p>  */}
          <p>{isImportant}</p>
          <p>{count}</p>
          <button onClick={add}> add </button> 
          <button onClick={minus}> minus </button> 
          {/* <button onClick={handleClick}> change State </button>  */}
        </>
    )
}
