import axios from "axios"
import { saveToStorage } from "../LocalStorage"




export const UserService = {
  setInitialPrefs,
  saveUserPrefs,
}
let user = {}


function setInitialPrefs(prefs){
    if (!prefs) return
    document.documentElement.style.setProperty('--bg-color', prefs.bgcColor || '')
    document.documentElement.style.setProperty('--main-color', prefs.color || '')
}

function saveUserPrefs(prefs){
    user.color = prefs.color
    user.bgcColor = prefs.bgcColor
    saveToStorage('user',user)
}