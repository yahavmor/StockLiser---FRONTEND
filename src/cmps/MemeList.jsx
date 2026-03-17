import React from "react"

export function MemeList({ memes = [], removeMeme }) {
    return (
        <section className="memes-list">
            <div className="gallery">
                {memes.map((meme) => (
                    <div className="meme-item" key={meme.id}>
                        <img className="meme" src={meme.url} alt="meme" />
                        <button onClick={() => removeMeme(meme.id)}>
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </section>
    )
}
