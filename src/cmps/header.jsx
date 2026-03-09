import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, NavLink, redirect, useNavigate } from 'react-router-dom'
import { clearUser, setUser } from "../store/user/user.slice"





export function Header(){
    const user = useSelector(state=>state.userModule.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    function logOut(){
        dispatch(clearUser())
        navigate('/')
    }
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
                {!user&&(<NavLink to="/login">
                    <li>Login</li>
                </NavLink>)}
                {user && (
                <>
                    <NavLink to="/user">
                    <li>Hello {user.username}</li>
                    </NavLink>

                    <button onClick={logOut}>LogOut</button>
                </>
                )}

                
                
            </ul>
        </nav>
        </>
    )
}