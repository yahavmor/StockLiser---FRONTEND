import React from "react"
import { useForm } from "react-hook-form"
import {saveToStorage} from "../services/LocalStorage"
import { useSelector } from "react-redux"




export function Login(){
    const user = useSelector(state => state.userModule.user)
    console.log(user)


    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},  
    } = useForm()

    const onSubmit = (data) =>{
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