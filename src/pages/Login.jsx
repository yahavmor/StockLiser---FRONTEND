import React from "react"



export function Login(){
    return(
        <div className="login-page">
            <h1 className="page-header">Login Form</h1>
            <section className="box-info">
                <label>Username:</label>
                <input type="text" placeholder=""/>
            </section>
        </div>
    )
}