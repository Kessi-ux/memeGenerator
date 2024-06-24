import React from 'react'

export const Navbar = (props) => {
  return (
    // <div>
    //     <nav 
    //         className ={props.darkMode ? "dark" : ""}
    //     >
    //         {/* <img 
    //          className="nav--logo_icon"
    //          src = "./images/react-icon-small.png" 
    //          /> */}

    //          <h3 className='nav--logo_text'>ReactFacts</h3>

    //         <div
    //             className="toggler"
    //         >
    //             <p className='toggler--light'>Light</p>

    //             <div 
    //                 className='toggler--slider'
    //                 onClick = {props.togglerDarkMode}
    //             >
    //                 <div className = "toggler-slider--circle"></div>
                
    //             </div>

    //             <p className='toggle-dark'>Dark</p>

    //         </div>

    //     </nav>
    // </div>
    <div>
    <nav className={props.darkMode ? "dark" : ""}>
      <h3 className='nav--logo_text'>ReactFacts</h3>

      <div className="toggler" onClick={props.toggleDarkMode}>
        <p className='toggler--light'>Light</p>
        <div className={`toggler--slider ${props.darkMode ? 'active' : ''}`}>
          <div className="toggler-slider--circle"></div>
        </div>
        <p className='toggle-dark'>Dark</p>
      </div>
    </nav>
  </div>
  )
}
