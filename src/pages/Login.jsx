import React, { useState } from "react"
import { useForm } from "react-hook-form"
import {saveToStorage} from "../services/LocalStorage"
import { useDispatch, useSelector } from "react-redux"
import { setUser, clearUser } from "../store/user/user.slice"
import { useNavigate } from "react-router-dom"
import { UserService } from "../services/user/user.service"
import { AuthService } from "../services/auth/auth.service"
import axios from "axios"


export function Login(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(state=>state.userModule.user)
    const [signUp,setSignUp] = useState(false)

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},  
    } = useForm()

    const onSubmit = async (data) => {
        try {
            let user
            if (signUp) {
                user = await AuthService.signup(data)
            } else {
                user = await AuthService.login(data)
            }            
            dispatch(setUser(user))
            navigate('/')
        } catch (err) {
            console.log(err)
            alert('username or password not correct')
        }
    }


    return(
        <div className="login-page">
            <h1 className="page-header">Login Form</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="box-info">
                {signUp&&<input className="input-fullname" placeholder="fullname" {...register("fullname")} />}
                <input className="input-username" placeholder="username" {...register("username")} />
                <input className="input-password" placeholder="password" type="password" {...register("password", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}
                <button type="submit">Login</button>
                {!signUp&&<button type="submit" onClick={()=>setSignUp(true)}>Not a member? Click to Signup</button>}
            </form>
        </div>
    )
}