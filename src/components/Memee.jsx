import React, { useState } from 'react'
import memesData from "./memeData"

export const Memee = () => {

    const [meme, setMeme] = React.useState({
        topName: "",
        bottomName: "",
        randomImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR49vGCcgWljUpsLaUtOXUjjINhZ72fds7CPSkqIxnYvQ&s",
    })

     const [allMemeImages, setAllMemeImages] = React.useState(memesData);                                                                                    
     
     function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
                ...prevMeme,
                randomImage: url
        }) )
     }

      function handleChange(event){
        const {name, value, type, checked} = event.target
        setMeme(prevData => {
            return {
                ...prevData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    return (
    <main>
        <div className="form">
            <input 
                type="text"
                placeholder="Top text"
                className="form--input" 
                name="topName"
                value={meme.topName}
                onChange={handleChange} />

            <input 
                type="text"
                placeholder="Bottom text"
                className="form--input"
                name="bottomName"
                value={meme.bottomName}
                onChange={handleChange}/>   
        </div>
            <button 
                className="form--button"
                onClick={getMemeImage}>
                    Get a new meme image
            </button>
            <div className="meme">
            <img src={meme.randomImage} alt="meme Image" className="memeImage" />    
            <h1 className='meme-text top'>{meme.topName}</h1>
            <h1 className='meme-text bottom'>{meme.bottomName}</h1>
            </div>        
    </main>
  )
}
