import React, { useState } from "react"
import { StockService } from "../services/stock/stock.service"



export function HomePage() {
    const [searchTerm, setSearchTerm] = useState('')
    const [searchEnable, setSearchEnable] = useState(false)

    async function handleSearch(e){
        e.preventDefault()
        if(!StockService.isProbablySymbol(searchTerm.toUpperCase())) {
            alert("Not a valid stock symbol format");
            return
        }
        const stock = await StockService.searchStock(searchTerm)
        setSearchTerm('')
    }

    return (
        <div className="home-page">
            <header className="home-header">
                <h1>Welcome to the Stock App</h1>
            </header>
            <main>
                <p>Explore the stock market and manage your portfolio with ease.</p>
                <form onSubmit={handleSearch}>
                    <label>Search any stock:</label>
                    <input 
                        type="text"
                        value={searchTerm}
                        onChange={(e)=>{setSearchTerm(e.target.value)}}
                    />
                    <button>Search</button>
                </form>

                <div className="stock-preview">
                </div>
            </main>
            
        </div>
    )
}