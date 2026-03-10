import React, { useState } from "react"
import { useSelector } from "react-redux"
import { MemeService } from "../services/meme/meme"



export function Meme(){
    const [meme,setMeme] = useState(null)

    async function generateMeme(){
        const meme =await MemeService.fetchData('https://meme-api.com/gimme')
        setMeme(meme)
    }


    return(
        <section className="meme-page">
            <button className="meme-header" onClick={()=>{generateMeme()}}>Click for random meme</button>

            {meme&&(<div className="meme-box">
                <img src={meme} alt="meme" />
            </div>)}
        </section>

    )
}