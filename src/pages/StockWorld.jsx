import React, { useEffect, useRef, useState } from "react"
import { StockService } from "../services/stock/stock.service"
import { Loader } from "../cmps/Loader"
import { useDispatch, useSelector } from "react-redux"
import { toggleLoader } from "../store/stock/stock.slice"





export function StockWorld() {
    const loader = useSelector(state=>state.stockModule.loader)
    const dispatch = useDispatch()
    const inputRef = useRef()
    const user = useSelector(state=>state.userModule.user)

    const [searchTerm, setSearchTerm] = useState('')
    const [searchEnable, setSearchEnable] = useState(false)
    const [stockPrice, setStockPrice] = useState('')

    function focusInput(){
        inputRef.current?.focus()
    }
    
    useEffect(() => {
        if (!loader) focusInput()
    }, [loader])

    async function handleSearch(e) {
        e.preventDefault()
        dispatch(toggleLoader(true))

        if (!StockService.isProbablySymbol(searchTerm.toUpperCase())) {
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

        setStockPrice(stock)
        setSearchTerm('')
        dispatch(toggleLoader(false))
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
                        type="text"
                        value={searchTerm}
                        onChange={(e)=>{setSearchTerm(e.target.value)}}
                    />
                    <button>Search</button>
                </form>)
                )}


                {stockPrice&&(
                        <div className="stock-preview">
                        <h3>Current stock price : {stockPrice}$</h3>
                        </div>
                    )
                }
            </main>
            
        </div>
    )
}