import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, NavLink, redirect, useNavigate } from 'react-router-dom'
import { removeFromStorage } from "../services/LocalStorage.js"
import { AuthService } from "../services/auth/auth.service.js"
import { clearUser } from "../store/user/user.slice.js"
import { showMsg } from "../store/user/msg.slice.js"







export function Header(){
    const user = useSelector(state=>state.userModule.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    async function logOut(){
        try{
            const loggedOutUser = await AuthService.logOut()
            dispatch(clearUser())
            removeFromStorage('user-crad')
            navigate('/')
            dispatch(showMsg({text:"User has logged out",result:true}))
        }
        catch(err){
            console.log(err)
            dispatch(showMsg({text:"User has not logged out",result:false}))
        }

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