import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export function MemeDetails(){
    const [memeId,setMemeId] = useState(null)
    const params = useParams()
    useEffect(()=>{
        setMemeId(params.id)
    },[])
    return(
        <div>MEME</div>
    )
}