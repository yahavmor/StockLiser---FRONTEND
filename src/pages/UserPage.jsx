import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { saveToStorage } from "../services/LocalStorage"
import { MemeService } from "../services/meme/meme.service"
import { MemeList } from "../cmps/MemeList"
import { displayMessage } from "../services/util.service"
import { showMsg } from "../store/user/msg.slice"






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
        try{
            const removedMeme = await MemeService.removeMeme(memeId)
            dispatch(showMsg({ text: "Meme Has been deleted", result: true }))
        }
        catch(err){
            console.log(err)
            dispatch(showMsg({ text: "Meme Has not been deleted", result: false }))
        }
    }
    
    return(
        <div className="user-page">
            <MemeList memes = {memes} removeMeme={removeMeme}/>
        </div>
    )
}