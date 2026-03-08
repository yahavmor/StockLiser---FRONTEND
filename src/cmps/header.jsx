import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { clearUser } from "../store/user/user.slice"





export function Header(){
    const user = useSelector(state=>state.userModule.user)
    const dispatch = useDispatch()
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
                {user&&(<NavLink to="/">
                     <li>Hello {user.username}</li>
                     <button onClick={()=>dispatch(clearUser())}>LogOut</button>
                </NavLink>)}
                
                
            </ul>
        </nav>
        </>
    )
}