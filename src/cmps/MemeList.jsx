import React from "react"
import { useNavigate } from "react-router-dom"


export function MemeList({ memes = [], removeMeme}) {
    const navigate = useNavigate()
    return (
        <section className="memes-list">
            <div className="gallery">
                {memes.map((meme) => (
                    <div className="meme-item" key={meme.id}>
                        <img className="meme" src={meme.url} onClick={()=>{navigate(`/meme/${meme.id}`)}} alt="meme" />
                        <button onClick={() => removeMeme(meme.id)}>
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </section>
    )
}
