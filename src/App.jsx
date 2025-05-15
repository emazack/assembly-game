import React from "react"
import { languages } from "./languanges"

export default function AssemblyEndgame() {

    const languageElements = languages.map((lang) => {
        return (
            <div 
                className="badge" 
                key={lang.name}
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
