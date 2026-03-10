import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import React from "react"
import { Login } from './pages/Login'
import { UserPage } from './pages/UserPage'
import { Meme } from './pages/MemePage'






export function RootCmp() {
    return (
        <>
            <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/user" element={<UserPage/>}/>  
                    <Route path="/meme" element={<Meme/>}/>  
            </Routes>
        </> 
    )
}


