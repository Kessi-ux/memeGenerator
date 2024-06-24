import React from 'react'

export const Outing = () => {
    const [isGoingOut, setIsGoingOut ] = React.useState(true)
    // const isGoingOut = true
    
    // let answer = isGoingOut ? 'Yes' : 'No';
    
    function flipClick(){
      setIsGoingOut(prevState => !prevState)
    }
  
  return (
    <div className='state'>
        <h1 className="state">Do I feel like going out tonight?</h1>
        <div onClick={flipClick} className='state--value'>
          {/* <h1>{isGoingOut ? 'Yes' : 'No'}</h1> */}
          <h1>{isGoingOut ? 'Yes' : 'No'}</h1>
        </div>
    </div>
  )
}
