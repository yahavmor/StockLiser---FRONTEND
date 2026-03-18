import React from "react"
import { useNavigate } from "react-router-dom"

export function HomePage() {
    const navigate = useNavigate()

    return (
        <div className="home-page">
            <div className="overlay">
                <h1 className="title">Welcome to MemeMarket</h1>
                <p className="subtitle">Explore stocks, save memes, and manage everything in one place</p>

                <div className="btn-container">
                    <button onClick={() => navigate("/login")}>Login</button>
                    <button onClick={() => navigate("/meme")}>Random Meme</button>
                    <button onClick={() => navigate("/user")}>My Profile</button>
                </div>
            </div>
        </div>
    )
}
