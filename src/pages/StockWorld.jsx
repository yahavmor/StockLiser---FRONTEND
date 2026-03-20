import React, { useEffect, useRef, useState } from "react"
import { StockService } from "../services/stock/stock.service"
import { Loader } from "../cmps/Loader"
import { useDispatch, useSelector } from "react-redux"
import { toggleLoader } from "../store/stock/stock.slice"
import { Navigate } from "react-router-dom"
import { displayMessage, isProbablySymbol } from "../services/util.service"







export function StockWorld() {
    const loader = useSelector(state=>state.stockModule.loader)
    const dispatch = useDispatch()
    const inputRef = useRef()
    const user = useSelector(state=>state.userModule.user)

    const [searchTerm, setSearchTerm] = useState('')
    const [searchEnable, setSearchEnable] = useState(false)
    const [stockPrice, setStockPrice] = useState('')
    const [savedStock, setSavedStock] = useState(false)

    function focusInput(){
        inputRef.current?.focus()
    }
    
    useEffect(() => {
        if (!loader) focusInput()
    }, [loader])

    async function handleSearch(e) {
        e.preventDefault()
        dispatch(toggleLoader(true))

        if (!isProbablySymbol(searchTerm.toUpperCase())) {
            alert("Not a valid stock symbol format")
            setSearchTerm('')
            dispatch(toggleLoader(false))
            return
        }

        const stock = await StockService.searchStock(searchTerm)

        if (!stock) {
            alert("Pick a real stock")
            setSearchTerm('')
            dispatch(toggleLoader(false))
            return
        }
        setSavedStock(false)
        setStockPrice(stock)
        dispatch(toggleLoader(false))
    }
     if (!user) {
        return <Navigate to="/login" replace />
    }
    async function onSaveStock(stockName,stockPrice){
        setSavedStock(true)
        const saved = await StockService.saveStock(stockName.toUpperCase(),stockPrice)
        displayMessage(`Stock ${stockName} has been saved`)
        setSearchTerm('')
    }


    return (
        <div className="home-page">
            <header className="home-header">
                <h1>Welcome to the Stock App</h1>
            </header>
            <main>
                <p>Explore the stock market and manage your portfolio with ease.</p>


                {(loader?<Loader/>:(<form onSubmit={handleSearch}>
                    <label>Search any stock:</label>
                    <input 
                        ref={inputRef}
                        ty  pe="text"
                        value={searchTerm}
                        onChange={(e)=>{setSearchTerm(e.target.value)}}
                    />
                    <button>Search</button>
                </form>)
                )}


                {stockPrice&&(
                        <div className="stock-preview">
                        <h3>Current stock price : {stockPrice}$</h3>
                        {!savedStock&&<button onClick={()=>onSaveStock(searchTerm,stockPrice)}>Insert to follow list</button>}
                        </div>
                    )
                }
            </main>
            
        </div>
    )
}