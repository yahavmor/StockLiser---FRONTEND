import axios from "axios"
import { saveToStorage } from "../LocalStorage"




export const UserService = {
    setInitialPrefs,
    login,
    saveUserPrefs,
    signup
}
let user = {}


function setInitialPrefs(prefs){
    if (!prefs) return
    document.documentElement.style.setProperty('--bg-color', prefs.bgcColor || '')
    document.documentElement.style.setProperty('--main-color', prefs.color || '')
}
async function login(cred){
    const res = await axios.post(
    'http://localhost:3030/api/auth/login',
    cred,
    { withCredentials: true }
  )
  return res.data
}
async function signup(cred){
    const res = await axios.post(
    'http://localhost:3030/api/auth/signup',
    cred,
    { withCredentials: true }
  )
  return res.data
}
async function logOut(){
    const res = await axios.post('http://localhost:3030/api/auth/logout')
  return res.data
}
function saveUserPrefs(prefs){
    user.color = prefs.color
    user.bgcColor = prefs.bgcColor
    saveToStorage('user',user)
}