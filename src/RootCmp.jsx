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
import { MemeDetails } from './cmps/MemeDetails.jsx'
import { WatchList } from './pages/watchList.jsx'
import { UserMsg } from './cmps/UserMsg.jsx'

const BASE_URL = import.meta.env.DEV
  ? "http://localhost:3030/api/"
  : "https://backend-stock-sv6k.onrender.com/api/";

export function RootCmp() {
    const dispatch = useDispatch()

    useEffect(() => {
        async function getLoggedInUser() {
            try {
                const res = await axios.get(
                    BASE_URL + "auth/me",
                    { withCredentials: true }
                )
                dispatch(setUser(res.data))
            } catch (err) {
                console.log(err)
            }
        }
        getLoggedInUser()
    }, [])

    return (
        <>
            <UserMsg/>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/stock" element={<StockWorld/>} />
                <Route path="/login" element={<Login/>}/>
                <Route path="/user" element={<UserPage/>}/>  
                <Route path="/meme" element={<Meme/>}/>
                <Route path="/meme/:id" element={<MemeDetails/>}/>  
                <Route path="/stock/:id" element={<WatchList/>}/>
            </Routes>
        </>
    )
}
