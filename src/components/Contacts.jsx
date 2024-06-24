import React from 'react'
import { Icon } from '@iconify/react';

export const Contacts = () => {
  
    const [contact, setContact] = React.useState({
        firstName: "Jane",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })

    let starIcon = contact.isFavorite ? "mdi:star" : "mdi:star-outline"

    function toggleFavorite(){
        setContact(prevState => {
            return {
                ...prevState, 
                isFavorite: !prevState.isFavorite
            }
        })
    }
        // setContact(prevState.isFavorite => !prevState.isFavorite)
        // console.log("Toggle Favorite")

  return (
    <div>
        <article className="card">
        {<Icon icon={starIcon} onClick={toggleFavorite}/>}

            <img src="./images/user.png" className="card--image" alt="" />
            <div>
                <img src={`../assets/${starIcon}`} 
                     className="card--favorite" 
                     onClick={toggleFavorite} 
                     alt="" />
                <h2 className='card--name'>
                    {contact.firstName} {contact.lastName}
                </h2>
                <p className='card--contact'>{contact.phone}</p>
                <p className='card--contact'>{contact.email}</p>

            </div>
        </article>
    </div>
  )
}
