import axios from "axios"
import { createRandomId } from "../util.service"

export const MemeService = {
    fetchData,
    saveMeme,
    getMemes,
    removeMeme,
    getMemeById
}

const BASE_URL = import.meta.env.DEV
  ? "http://localhost:3030/api/"
  : "https://backend-stock-sv6k.onrender.com/api/";

async function fetchData(url){
    const res = await axios.get(url)
    return {
        id: createRandomId(),
        url: res.data.url
    }
}

async function saveMeme(meme) {
    const res = await axios.post(
        BASE_URL + "meme/save",
        meme,
        { withCredentials: true }
    )
    return res.data
}

async function getMemes() {
    const res = await axios.get(
        BASE_URL + "meme",
        { withCredentials: true }
    )
    return res.data
}

async function removeMeme(id) {
    const res = await axios.delete(
        BASE_URL + `meme/${id}`,
        { withCredentials: true }
    )
    return res.data
}

async function getMemeById(id) {
    const res = await axios.get(
        BASE_URL + `meme/${id}`,
        { withCredentials: true }
    )
    return res.data
}
