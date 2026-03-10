import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setBgcColor, setColor } from "../store/user/user.slice"
import { saveToStorage } from "../services/LocalStorage"
import { MemeService } from "../services/meme/meme.service"
import { MemeList } from "../cmps/MemeList"
import { UserService } from "../services/user/user.service"





export function UserPage(){
    const user = useSelector(state=>state.userModule.user)
    const prefs = useSelector(state=>state.userModule.prefs)
    const dispatch = useDispatch()
    const [memes,setMemes] = useState([])
    useEffect(()=>{
        loadMemeGallery()
    },[])
    function loadMemeGallery(){
        const memes = MemeService.loadMemes()
        setMemes(memes)
    }
    function background(e) {
        const preferedColor = e.target.value
        dispatch(setBgcColor(preferedColor))
    
        document.documentElement.style.setProperty('--bg-color', preferedColor)
    }
    function color(e) {
        const preferedColor = e.target.value
        dispatch(setColor(preferedColor))
    
        document.documentElement.style.setProperty('--main-color', preferedColor)
    }
    
    function savePrefs(e){
        e.preventDefault()
        UserService.saveUserPrefs(prefs)
    }
    console.log(memes)
    return(
        <div className="user-page">
            <header>
                <h1>Prefernces of {user.username}</h1>
            </header>
            <form className="perefernce-box" onSubmit={(e)=>{savePrefs(e)}}>
                <label>Color</label>
                <input type="color" onChange={e=>{color(e)}}/>
                <label>Background color</label>
                <input type="color" onChange={e=>{background(e)}} />
                <button>done</button>
            </form>
            <MemeList memes = {memes}/>
        </div>
    )

}