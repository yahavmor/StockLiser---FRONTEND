import React, { useEffect, useState } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { MemeService } from "../services/meme/meme.service"
import { displayMessage } from "../services/util.service"
import { Loader } from "./Loader"
import { Card,Button} from "@mui/material";
import { UserMsg } from "./userMsg"

export function MemeDetails(){
    const params = useParams()
    const navigate = useNavigate()
    const [meme,setMeme] = useState(null)
    const [userMsg, setUserMsg] = useState(null)

    useEffect(()=>{
        onGetMemeById(params.id)
    },[])
    useEffect(() => {
        if (!userMsg) return

        const timer = setTimeout(() => {
            setUserMsg(null)
        }, 3000)

        return () => clearTimeout(timer)
    }, [userMsg])
    async function onGetMemeById(memeId){
        try{
            const chosenMeme = await MemeService.getMemeById(memeId)
            setMeme(chosenMeme)
            setUserMsg({ msg: "Meme has been loaded", result: true })
        }
        catch(err){
            console.log(err)
            setUserMsg({ msg: "Meme has not been loaded", result: false })
        }

    }
    if(!meme) return <Loader/>
    return (
        <section className="meme-details">
            <Card className="meme-card">
                <img src={meme.url} alt="image of meme" />
            </Card>
            <Button onClick={()=>navigate('/user')}
                variant="outlined" 
                color="error" 
                sx={{ mt: 2 }}
                >Go Back
            </Button>
            {userMsg&&<UserMsg msg={userMsg.msg} result={userMsg.result}/>}
        </section>
    )

}