import React, { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import { displayMessage } from "../services/util.service"
import { StockService } from "../services/stock/stock.service"
import { Card, CardContent, Typography, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { showMsg } from "../store/user/msg.slice";



export function WatchList(){
    const params = useParams()
    const dispatch = useDispatch()
    const userId = params.id
    const [stocks,setStocks] = useState([])
    useEffect(()=>{
        onLoadSavedStocks()
    },[])
    async function onLoadSavedStocks(){
        try{
            const savedStocks = await StockService.loadSavedStocks()
            setStocks(savedStocks)
            dispatch(showMsg({text:"Watch list has been loaded",result:true}))
        }
        catch(err){
            console.log(err)
            dispatch(showMsg({text:"Watch list has not been loaded",result:false}))
        }
    }
    async function onRemoveStock(stockId){
        try{
            await StockService.removeStock(stockId)
            setStocks(prev => prev.filter(stock => stock.stockId !== stockId))
            dispatch(showMsg({text:"Stock has been removed",result:true}))
        }
        catch(err){
            console.log(err)
            dispatch(showMsg({text:"Stock has not been removed",result:false}))
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




