import React from 'react'
import { Icon } from '@iconify/react';
import joshua from "../assets/joshua.jpg"
import nikola from "../assets/nikola.jpg"
import { Star } from './Star';


export const Johndoe = () => {
        const [contact, setContact] = React.useState({
            firstName: "John",
            lastName: "Doe",
            phone: "+1(719)555-1212",
            email: "itsmyrealname@example.com",
            isFavorite: true
        })
    
        function toggleFavorite(){
            setContact(prevState => {
                return {
                ...prevState, 
                isFavorite: !prevState.isFavorite,
            }
        })
    }
    return (
    <>
     <div>
        <article className="card">
            <div>
                <Star isFilled={contact.isFavorite} handleClick={toggleFavorite}/>
                <h2 className='card--name'>
                    {contact.firstName} {contact.lastName}
                </h2>
                <p className='card--contact'>{contact.phone}</p>
                <p className='card--contact'>{contact.email}</p>
            </div>
        </article>
    </div>   
    </>
  )
}
