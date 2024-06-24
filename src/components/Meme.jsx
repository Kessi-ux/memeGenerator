import React from 'react'

export const Meme = () => {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://api.imgflip.com/get_memes"
    })

    const [allMemes, setAllMemes] = React.useState([]);
    
    // React.useEffect(() => {
    //     fetch("https://api.imgflip.com/get_memes")
    //     .then(res => res.json())
    //     .then(data => setAllMemes(data.data.memes))
    // }, [])    
    
    // React.useEffect( async () => {
    //    const res  = await fetch("https://api.imgflip.com/get_memes")
    //    const data = await res.json()
    //    setAllMemes(data.data.memes)
    // }, [])  

    // React.useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const res = await fetch("https://api.imgflip.com/get_memes");
    //             const data = await res.json();
    //             setAllMemes(data.data.memes);
    //         } catch (error) {
    //             console.error("Error fetching memes:", error);
    //         }
    //     };
    
    //     fetchData();

    //     // return()=> {

    //     // }

    // }, []);

    React.useEffect(() => {
        async function getMeme(){
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMeme()
    }, [])
    
     
     function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
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
