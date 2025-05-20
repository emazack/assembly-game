import {useState} from "react"
import { languages } from "./languanges"

export default function AssemblyEndgame() {

    const [currentWord, setCurrentWord] = useState("react")
    const [guessedLetters, setGuessedLetters] = useState([])
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    console.log("guessedLetters", guessedLetters)
    
    
    const addGuessedLetter = (letter) => {
        if (guessedLetters.includes(letter)) {
            return
        }
        setGuessedLetters(prevLetters => [...prevLetters, letter])
    }
    
    const stringToArray = (myString) => {
        let newArray = []
        for (let letter = 0; letter < myString.length; letter++) {
            newArray.push(myString[letter])
        }
        return newArray
    }
    
    const keyboardElements = alphabet.split("").map((letter, index) => {
        return (
            <button onClick={() => addGuessedLetter(letter)} className="letter" key={index}>{letter.toUpperCase()}</button>
        )
    })

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

    const letterElements = stringToArray(currentWord).map((letter, index) => {
        return (
            <span className="letter" key={index}>{letter}</span>
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
            <section className="word">
                {letterElements}
            </section>
            <section className="keyboard">
                {keyboardElements}
            </section>
            <button className="new-game">New Game</button>
        </main>
    )
}
