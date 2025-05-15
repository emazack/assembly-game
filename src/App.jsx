import React from "react"
import { languages } from "./languanges"

export default function AssemblyEndgame() {

    const languageElements = languages.map((lang, index) => {
        return (
            <div 
                className="badge" 
                key={index}
                style={{backgroundColor:lang.backgroundColor, color:lang.color}}>
                {lang.name}
            </div>
        )
    })

    return (
        <main>
            <header>
                <h1>Assembly: Endgame</h1>
                <p> Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
            </header>
            <section className="status">
                <p>You win!</p>
                <p>Well done! 🎉</p>
            </section>
            <section className="badges-langauges">
                {languageElements}
            </section>
        </main>
    )
}
