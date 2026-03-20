import axios from "axios"
import { createRandomId } from "../util.service"

export const MemeService = {
    fetchData,
    saveMeme,
    getMemes,
    removeMeme
}

async function fetchData(url){
    const res = await axios.get(url)
    return {
        id: createRandomId(),
        url: res.data.url
    }
}

async function saveMeme(meme) {
    const res = await axios.post(
        'http://localhost:3030/api/meme/save',
        meme, 
        { withCredentials: true }
    )
    return res.data
}

async function getMemes() {
    const res = await axios.get(
        'http://localhost:3030/api/meme',
        { withCredentials: true }
    )
    return res.data
}
async function removeMeme(id) {
    const res = await axios.delete(
        `http://localhost:3030/api/meme/${id}`,
        { withCredentials: true }
    )
    return res.data
}


