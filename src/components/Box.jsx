import React from 'react'

export const Box = (props) => {

    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
    }
  return (
    <>
    <div style={styles} 
     className="box"
    //  onClick = {()=>props.toggleClick(props.id)}
    onClick = {props.toggleClick}
     >
    </div>
    </>
  )
}


