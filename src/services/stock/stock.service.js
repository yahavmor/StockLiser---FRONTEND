import axios from "axios"
import { createRandomId } from "../util.service"

const BASE_URL = import.meta.env.DEV
  ? "http://localhost:3030/api/"
  : "https://backend-stock-sv6k.onrender.com/api/";

export const StockService = {
    searchStock,
    saveStock,
    loadSavedStocks,
    removeStock
}

async function searchStock(value){
    value = value.toUpperCase()
    const key = import.meta.env.VITE_FINNHUB_API_KEY;
    const url = `https://finnhub.io/api/v1/quote?symbol=${value}&token=${key}`;

    try {
        const res = await axios.get(url)
        return res.data.c
    } catch (err) {
        console.error('Error in searchStock:', err)
        throw err
    }
}

async function saveStock(symbol, price){
    const stockId = createRandomId()
    const stock = { stockId, symbol, price }

    const res = await axios.post(
        BASE_URL + "stock/save",
        stock,
        { withCredentials: true }
    )
    return res.data
}

async function loadSavedStocks() {
    const res = await axios.get(
        BASE_URL + "stock",
        { withCredentials: true }
    )
    return res.data
}

async function removeStock(stockId) {
    const res = await axios.delete(
        BASE_URL + `stock/${stockId}`,
        { withCredentials: true }
    )
    return res.data
}
