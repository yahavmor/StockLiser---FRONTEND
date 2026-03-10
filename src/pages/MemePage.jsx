import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { MemeService } from "../services/meme/meme.service"
import { toggleLoader } from "../store/stock/stock.slice"
import { Loader } from "../cmps/Loader"




export function Meme(){
    const [meme,setMeme] = useState(null)
    const dispatch = useDispatch()
    const loader = useSelector(state=>state.stockModule.loader)

    async function generateMeme(){
        dispatch(toggleLoader(true))
        const meme =await MemeService.fetchData('https://meme-api.com/gimme')
        dispatch(toggleLoader(false))
        setMeme(meme)
    }
    function onSaveMeme(){
        MemeService.saveMeme(meme)
        console.log('saved in storage')
    }


    return(
        <section className="meme-page">
            <button className="meme-btn" onClick={()=>{generateMeme()}}>Click for random meme</button>

            {(loader?<Loader/>:(meme&&
            <div className="meme-box">
                <img src={meme} alt="meme" />
                <button onClick={()=>onSaveMeme()}>Save meme</button>
            </div>)
            )}
        </section>

    )
}
