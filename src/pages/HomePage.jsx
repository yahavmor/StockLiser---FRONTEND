import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { showMsg } from "../store/user/msg.slice"


export function HomePage() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(state=>state.userModule.user)
    function myProfile(){
        if(user) navigate("/user")
        else dispatch(showMsg({ text: "Please login or signup to unlock more features ", result: false }))
    }

    useEffect(()=>{
        if (user === undefined) return 
        if (user) dispatch(showMsg({ text: `Hello ${user.username}`, result: true }))
        else dispatch(showMsg({ text: "Please login or signup to unlock more features ", result: false })) 
    },[user])
    
    return (
        <div className="home-page">
            <div className="overlay">
                <h1 className="title">Welcome to MemeMarket</h1>
                <p className="subtitle">Explore stocks, save memes, and manage everything in one place</p>

                <div className="btn-container">
                    <button onClick={()=> navigate("/login")}>Login</button>
                    <button onClick={() => navigate("/meme")}>Random Meme</button>
                    <button onClick={myProfile}>My Profile</button>
                </div>
            </div>
        </div>
    )
}
