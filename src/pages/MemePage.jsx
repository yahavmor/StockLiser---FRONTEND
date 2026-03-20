import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { MemeService } from "../services/meme/meme.service"
import { toggleLoader } from "../store/stock/stock.slice"
import { Loader } from "../cmps/Loader"
import { displayMessage } from "../services/util.service"





export function Meme(){
    const [meme,setMeme] = useState(null)
    const dispatch = useDispatch()
    const loader = useSelector(state=>state.stockModule.loader)
    const user = useSelector(state=>state.userModule.user)
    

    async function generateMeme(){
        dispatch(toggleLoader(true))
        const meme =await MemeService.fetchData('https://meme-api.com/gimme')
        dispatch(toggleLoader(false))
        setMeme(meme)
    }
    
    async function onSaveMeme(meme){
        await MemeService.saveMeme(meme)
        displayMessage('Meme Saved')
    }




    return(
        <section className="meme-page">
            <button className="meme-btn" onClick={()=>{generateMeme()}}>Click for random meme</button>

            {(loader?<Loader/>:(meme&&
            <div className="meme-box">
                <img src={meme.url} alt="meme" />
                <button onClick={()=>onSaveMeme(meme)}>Save meme</button>
            </div>)
            )}
        </section>

    )
}
