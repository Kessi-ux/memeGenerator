import React from 'react'
import memeData from "./memeData"

export const Meme = () => {

    let url

    let meme = {
        topText: "",
        bottomText: "",
        randomImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR49vGCcgWljUpsLaUtOXUjjINhZ72fds7CPSkqIxnYvQ&s"
    }

    const [image, setImage] = React.useState(meme.randomImage)

    function getMemeImage(){
        const memesArray = memeData.data.memes
        const randomNumber = Math.floor(Math.random()*memesArray.length)
        url = memesArray[randomNumber].url
        setImage(url)
        console.log(url)
    }
  
    return (
    <main>
        <p>{url}</p>
        <div className="form">
            <input 
                type="text"
                placeholder="Top text"
                className="form--input" />

            <input 
                type="text"
                placeholder="Bottom text"
                className="form--input" />   
        </div>
            <button 
                className="form--button"
                onClick={getMemeImage}>
                    Get a new meme image
            </button>
            <div>
            <img src={image} alt="meme Image" className="memeImage" />    
            </div>  
    </main>
  )
}
