import React from 'react'
import joshua from "../assets/joshua.jpg"
import nikola from "../assets/nikola.jpg"
import { Icon } from '@iconify/react';

export const Star = (props) => {
    // let starIcon = props.isFilled ? joshua : nikola
    let starIcon = props.isFilled ? "mdi:star" : "mdi:star-outline"

  return (
    <div>
        <Icon icon={starIcon} onClick={props.handleClick}/>
       {/* <img src={starIcon}
            className="card--favorite" 
            onClick={props.handleClick} 
        />  */}
    </div>
  )
}
