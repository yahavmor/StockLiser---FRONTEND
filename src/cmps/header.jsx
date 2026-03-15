import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, NavLink, redirect, useNavigate } from 'react-router-dom'
import { clearUser, setUser, clearPrefs } from "../store/user/user.slice.js"
import { removeFromStorage } from "../services/LocalStorage.js"
import { UserService } from "../services/user/user.service.js"
import { AuthService } from "../services/auth/auth.service.js"






export function Header(){
    const user = useSelector(state=>state.userModule.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    function logOut(){
        dispatch(clearUser())
        dispatch(clearPrefs())
        AuthService.logOut()
        removeFromStorage('user-crad')
        removeFromStorage('user-prefs')
        document.documentElement.style.setProperty('--bg-color', '')
        document.documentElement.style.setProperty('--main-color', '')
        navigate('/')
    }
    return(
        <>
        <nav className="nav-bar">
            <ul className="nav-info">
                <NavLink to="/">
                <li>Home</li>
                </NavLink>
                <NavLink to="/meme">
                    <li>Meme</li>
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
                {user && (
                <>
                    <NavLink to="/stock"> Discover Stocks </NavLink>
                </>
                )}

                
                
            </ul>
        </nav>
        </>
    )
}