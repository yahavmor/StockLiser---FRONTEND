import axios from "axios"



export const AuthService = {
    login,
    signup,
    logOut,
    getLoggedInUser
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
async function logOut() {
  const res = await axios.post(
    'http://localhost:3030/api/auth/logout',
    {}, 
    { withCredentials: true } 
  )
  return res.data
}

async function getLoggedInUser() {
  const res = await axios.get(
    'http://localhost:3030/api/auth/me',
    { withCredentials: true } 
  )
  return res.data
}
