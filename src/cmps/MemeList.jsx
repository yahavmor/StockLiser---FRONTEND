import React, { useEffect, useState } from "react"

export function MemeList({memes=[]}){
    return(
        <section className="memes-list">
            <div className="gallery">
                {memes.map((meme, idx) => (
                <img className="meme" key={idx} src={meme}></img>
                ))}
            </div>
        </section>
    )
}