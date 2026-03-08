import React from "react"
import { useSelector } from "react-redux"
import { Link, NavLink, useNavigate } from 'react-router-dom'




export function Header(){
    const user = useSelector(state=>state.userModule.user)
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
                {user&&(<NavLink to="/">
                     <li>Hello {user.username}</li>
                </NavLink>)}
                
            </ul>
        </nav>
        </>
    )
}