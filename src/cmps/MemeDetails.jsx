import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { MemeService } from "../services/meme/meme.service"
import { displayMessage } from "../services/util.service"
import { Loader } from "./Loader"




export function MemeDetails(){
    const params = useParams()
    const [meme,setMeme] = useState(null)
    useEffect(()=>{
        onGetMemeById(params.id)
    },[])
    async function onGetMemeById(memeId){
        try{
            const chosenMeme = await MemeService.getMemeById(memeId)
            setMeme(chosenMeme)
            displayMessage('Meme has been loaded')
        }
        catch(err){
            console.log(err)
            displayMessage('error loading the meme')            
        }

    }
    if(!meme) return <Loader/>
    return (
        <section className="meme-details">
            <div className="meme-card">
                <img src={meme.url} alt="image of meme" />
            </div>
        </section>
    )

}