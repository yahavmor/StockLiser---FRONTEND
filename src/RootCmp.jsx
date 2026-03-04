import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import React from "react"


export function RootCmp() {
    return (
        <>
            <Routes>
                    <Route path="/" element={<HomePage/>} />        
            </Routes>
        </> 
    )
}


