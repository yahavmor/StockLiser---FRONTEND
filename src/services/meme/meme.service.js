import axios from "axios"
import { loadFromStorage, saveToStorage } from "../LocalStorage"


export const MemeService = {
    fetchData,
    saveMeme,
    loadMemes
}

async function fetchData(url){
    const res = await axios.get(url)
    return res.data.url
}
function saveMeme(url){
   let memesArr = loadFromStorage('user-memes') || []
   memesArr.push(url)
   saveToStorage('user-memes',memesArr)
}
function loadMemes(){
    return loadFromStorage('user-memes')
}


