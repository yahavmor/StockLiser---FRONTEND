import axios from "axios"



export const AuthService = {
    login,
    signup,
    logOut,
    getLoggedInUser
}
const BASE_URL = import.meta.env.DEV
  ? "http://localhost:3030/api/"
  : "https://backend-stock-sv6k.onrender.com/api/";


async function login(cred) {
  const res = await axios.post(
    BASE_URL + "auth/login",
    cred,
    { withCredentials: true }
  );
  return res.data;
}

async function signup(cred) {
  const res = await axios.post(
    BASE_URL + "auth/signup",
    cred,
    { withCredentials: true }
  );
  return res.data;
}

async function logOut() {
  const res = await axios.post(
    BASE_URL + "auth/logout",
    {},
    { withCredentials: true }
  );
  return res.data;
}

async function getLoggedInUser() {
  const res = await axios.get(
    BASE_URL + "auth/me",
    { withCredentials: true }
  );
  return res.data;
}
