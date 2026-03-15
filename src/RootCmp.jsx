import { Routes, Route } from 'react-router-dom'
import { StockWorld } from './pages/StockWorld'
import React from "react"
import { Login } from './pages/Login'
import { UserPage } from './pages/UserPage'
import { Meme } from './pages/MemePage'
import { HomePage } from './pages/HomePage'







export function RootCmp() {
    return (
        <>
            <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/stock" element={<StockWorld/>} />
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/user" element={<UserPage/>}/>  
                    <Route path="/meme" element={<Meme/>}/>  
            </Routes>
        </> 
    )
}


