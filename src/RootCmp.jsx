import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import React from "react"
import { Login } from './pages/Login'



export function RootCmp() {
    return (
        <>
            <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/login" element={<Login/>}/>      
                      
            </Routes>
        </> 
    )
}


