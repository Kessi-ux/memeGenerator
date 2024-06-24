import React from 'react'

export const Header = (props) => {
    
  return (
    <div>
       <header>
            <p>Current user: {props.user} </p>
        </header> 
    </div>
  )
}
