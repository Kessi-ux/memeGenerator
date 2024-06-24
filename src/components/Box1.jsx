import React from 'react'

export const Box = (props) => {

  const [on, setOn] = React.useState(props.on)

  function handleToggle(){
    setOn(prev => !prev)
  }

    const styles = {
        backgroundColor: on ? "#222222" : "transparent"
    }
  return (
    <>
    <div style={styles} className="box"  onClick={handleToggle}>
    </div>
    </>
  )
}


