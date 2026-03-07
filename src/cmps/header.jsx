import React from "react"
import { Link, NavLink, useNavigate } from 'react-router-dom'



export function Header(){
    const navigate = useNavigate()
    return(
        <>
        <nav className="nav-bar">
            <ul className="nav-info">
                <NavLink to="/">
                <li>Home</li>
                </NavLink>
                <NavLink to="/">
                    <li>Stats</li>
                </NavLink>
                <NavLink to="/login">
                    <li>Login</li>
                </NavLink>
                <NavLink to="/">
                     <li>User</li>
                </NavLink>

            </ul>
        </nav>
        </>
    )
}