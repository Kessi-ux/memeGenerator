import React from 'react'

export const WindowTracker = () => {
  const [windowWidth, setWindowWidth] =  React.useState(window.innerWidth) 

  // React.useEffect(() => {
  //   window.addEventListener("resize", function() {
  //     setWindowWidth(window.innerWidth)
  //     console.log("Resized")
  //   })
  // }, [])

  React.useEffect(() => {
    function watchWidth() {
      console.log("Setting up...")
      setWindowWidth(window.innerWidth)
      }

      window.addEventListener("resize", watchWidth)

    return function(){
      console.log("Cleaning up...")
      window.removeEventListener("resize", watchWidth)
    }
  }, [])

  
  return (
    <div>
        <h1>window width: {windowWidth}</h1>
    </div>
  )
}
