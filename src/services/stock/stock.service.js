import axios from "axios"

const BASE_URL = import.meta.env.PROD
    ? ''
    : 'http://localhost:3030'

export const StockService = {
    searchStock,
    saveStock
    
}

async function searchStock(value){
    value = value.toUpperCase()
    const key = import.meta.env.VITE_FINNHUB_API_KEY;
    const url = `https://finnhub.io/api/v1/quote?symbol=${value}&token=${key}`;
     try {
        const res = await axios.get(url)
        return res.data.c
    } catch (err) {
        console.error('Error in searchArtist:', err)
        throw err
    }
    
}

async function saveStock(symbol,price){
    const stock = {symbol,price}
    const res = await axios.post(
        'http://localhost:3030/api/stock/save',
        stock,
        { withCredentials: true }
    )
    return res.data
}
