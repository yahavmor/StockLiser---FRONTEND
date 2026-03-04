import React, { useState } from "react"


export function HomePage() {
    const [searchTerm, setSearchTerm] = useState('')

    function handleSearch(e){
        const value = e.target.value
        searchStock(value)
        setSearchTerm(value)
    }
    return (
        <div className="home-page">
            <header className="home-header">
                <h1>Welcome to the Stock App</h1>
            </header>
            <main>
                <p>Explore the stock market and manage your portfolio with ease.</p>
                <div className="search-stock">
                    <label>Pick any stock:</label>
                    <input type="text" onChange={(e)=>handleSearch(e)} />
                </div>

                <div className="stock-preview">
                    <h2 className="stock-name">
                        {searchTerm}
                    </h2>
                </div>
            </main>
            
        </div>
    )
}