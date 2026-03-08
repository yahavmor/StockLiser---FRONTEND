import React from "react"
import { useForm } from "react-hook-form"
import {saveToStorage} from "../services/LocalStorage"
import { useDispatch } from "react-redux"
import { setUser, clearUser } from "../store/user/user.slice"





export function Login(){
    const dispatch = useDispatch()

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},  
    } = useForm()

    const onSubmit = (data) =>{
    dispatch(setUser(data))
    saveToStorage('user-crad',data)
    }

    return(
        <div className="login-page">
            <h1 className="page-header">Login Form</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="box-info">
                <input className="input-username" placeholder="username" {...register("username")} />
                <input className="input-password" placeholder="password" type="password" {...register("password", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}
                <button type="submit">Login</button>
            </form>
        </div>
    )
}