import axios from "axios"

export const MemeService = {
    fetchData
}

async function fetchData(url){
    const res = await axios.get(url)
    return res.data.url
}


