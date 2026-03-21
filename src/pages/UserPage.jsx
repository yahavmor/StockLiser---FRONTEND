import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setBgcColor, setColor } from "../store/user/user.slice"
import { saveToStorage } from "../services/LocalStorage"
import { MemeService } from "../services/meme/meme.service"
import { MemeList } from "../cmps/MemeList"
import { displayMessage } from "../services/util.service"






export function UserPage(){
    const user = useSelector(state=>state.userModule.user)
    const dispatch = useDispatch()
    const [memes,setMemes] = useState([])
    useEffect(()=>{
        loadMemeGallery()
    },[memes])

    async function loadMemeGallery(){
        const memes = await MemeService.getMemes()
        setMemes(memes)
    }
    

    async function removeMeme(memeId) {
        await MemeService.removeMeme(memeId)
        displayMessage('Meme Has been deleted')
    }


    return(
        <div className="user-page">
            <MemeList memes = {memes} removeMeme={removeMeme}/>
        </div>
    )
}