import React, { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import { displayMessage } from "../services/util.service"
import { StockService } from "../services/stock/stock.service"
import { Card, CardContent, Typography, Button } from "@mui/material";



export function WatchList(){
    const params = useParams()
    const userId = params.id
    const [stocks,setStocks] = useState([])
    useEffect(()=>{
        onLoadSavedStocks()
    },[])
    async function onLoadSavedStocks(){
        try{
            const savedStocks = await StockService.loadSavedStocks()
            setStocks(savedStocks)
            displayMessage('watch list loaded')
        }
        catch(err){
            console.log(err)
            displayMessage('watch list load failed')
        }
    }
    async function onRemoveStock(stockId){
        try{
            await StockService.removeStock(stockId)
            setStocks(prev => prev.filter(stock => stock.stockId !== stockId))
            displayMessage('Stock has been removed')
        }
        catch(err){
            console.log(err)
            displayMessage('remove operation has failed')
        }
    }
    if (!stocks.length) return <div className="empty-watchlist">No stocks in your watch list</div>
    return (
        <section className="watch-list">
            <div className="info">
                {stocks.map(stock => (
                    <Card 
                        key={stock.stockId}
                        sx={{ 
                            background: "#1e1e1e", 
                            color: "white", 
                            p: 2,
                            mb: 2,
                            width: "300px"
                        }}
                    >
                        <CardContent>
                            <Typography variant="h5">{stock.symbol}</Typography>
                            <Typography variant="body1">{stock.price}$</Typography>

                            <Button 
                                variant="outlined" 
                                color="error" 
                                sx={{ mt: 2 }}
                                onClick={() => onRemoveStock(stock.stockId)}
                            >
                                Remove
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )

}




