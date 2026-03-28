import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { clearMsg } from "../store/user/msg.slice"

export function UserMsg() {
    const dispatch = useDispatch()
    const { text, result } = useSelector(state => state.msgModule.msg)

    useEffect(() => {
        if (!text) return
        const timer = setTimeout(() => dispatch(clearMsg()), 3000)
        return () => clearTimeout(timer)
    }, [text])

    if (!text) return null

    return (
        <div className={`user-msg-box ${result ? "success" : "error"}`}>
            {text}
        </div>
    )
}
