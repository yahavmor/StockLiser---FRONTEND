import { Routes, Route } from 'react-router-dom'
import { StockWorld } from './pages/StockWorld'
import React, { useEffect } from "react"
import { Login } from './pages/Login'
import { UserPage } from './pages/UserPage'
import { Meme } from './pages/MemePage'
import { HomePage } from './pages/HomePage'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setUser } from './store/user/user.slice.js'








export function RootCmp() {
    const dispatch = useDispatch()

    useEffect(() => {
        async function getLoggedInUser() {
            try {
                const res = await axios.get('http://localhost:3030/api/auth/me',{ withCredentials: true })
                dispatch(setUser(res.data))
            } catch (err) {
                console.log(err)
            }
        }
        getLoggedInUser()
    }, [])
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


