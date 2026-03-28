import React, { useEffect, useRef, useState } from "react"
import { StockService } from "../services/stock/stock.service"
import { Loader } from "../cmps/Loader"
import { useDispatch, useSelector } from "react-redux"
import { toggleLoader } from "../store/stock/stock.slice"
import { Navigate, useNavigate } from "react-router-dom"
import { isProbablySymbol } from "../services/util.service"
import { showMsg } from "../store/user/msg.slice"







export function StockWorld() {
    const loader = useSelector(state=>state.stockModule.loader)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const inputRef = useRef()
    const user = useSelector(state=>state.userModule.user)
    const [searchTerm, setSearchTerm] = useState('')
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
            dispatch(showMsg({text:'Please enter a valid symbol',result:false}))
            setSearchTerm('')
            dispatch(toggleLoader(false))
            return
        }

        const stock = await StockService.searchStock(searchTerm)

        if (!stock) {
            dispatch(showMsg({text:'Please enter a valid symbol',result:false}))
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
        try{
        const saved = await StockService.saveStock(stockName.toUpperCase(),stockPrice)
        setSavedStock(true)
        dispatch(showMsg({text:'Added to your watch list',result:true}))
        }
        catch(err){
            console.log(err)
            dispatch(showMsg({text:'Stock doest not added to your watch list',result:false}))
        }
    setSearchTerm('')
}


    return (
        <div className="stock-world">
            <header className="header">
                <h1>Welcome to the Stock App</h1>
            </header>
            <main>
                <p>Explore the stock market and manage your portfolio with ease.</p>


                {(loader?<Loader/>:(<form onSubmit={handleSearch}>
                    <label>Search any stock</label>
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
                <button className="watch-list-btn"
                    onClick={() => navigate(`/stock/${user._id}`)}>
                    Your Watch List
                </button>

            </main>
            
        </div>
    )
}