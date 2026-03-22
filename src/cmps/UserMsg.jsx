import React from "react"

export function UserMsg({ msg, result }) {
    return (
        <div className={`user-msg-box ${result ? "success" : "error"}`}>
            <p className="user-msg">{msg}</p>
        </div>
    )
}

