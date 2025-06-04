import { useState } from "react"
import { languages } from "./languanges"
import clsx from 'clsx';

export default function AssemblyEndgame() {

    const [currentWord, setCurrentWord] = useState("react")
    const [guessedLetters, setGuessedLetters] = useState([])
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const rightLettersList = currentWord.split("")

    const wrongGuessCount = guessedLetters.filter(letter => !currentWord.includes(letter)).length
    const isGameWon = currentWord.split("").every(letter => guessedLetters.includes(letter))
    const isGameLost = wrongGuessCount >= languages.length - 1
    const isGameOver = isGameWon || isGameLost

    const addGuessedLetter = (letter) => {
        if (guessedLetters.includes(letter)) {
            return
        }
        setGuessedLetters(prevLetters => [...prevLetters, letter])
    }

    function isLetterRight(letter) {
        if (guessedLetters.includes(letter)) {
            return rightLettersList.includes(letter)
        } else {
            return undefined
        }
    }

    const stringToArray = (myString) => {
        let newArray = []
        for (let letter = 0; letter < myString.length; letter++) {
            newArray.push(myString[letter])
        }
        return newArray
    }

    const keyboardElements = alphabet.split("").map(letter => {
        const keyboardLetterClass = clsx(
            'default',
            isLetterRight(letter) === true && 'right',
            isLetterRight(letter) === false && 'wrong'
        )

        return (
            <button
                className={`letter ${keyboardLetterClass}`}
                key={letter}
                onClick={() => addGuessedLetter(letter)}
            >
                {letter.toUpperCase()}
            </button>
        )
    })

    const languageElements = languages.map((lang, index) => {
        const className = clsx({
            badge: true,
            lost: index < wrongGuessCount
        })
        return (
            <span
                className={className}
                key={lang.name}
                style={{ backgroundColor: lang.backgroundColor, color: lang.color }}>
                {lang.name}
            </span>
        )
    })

    const letterElements = stringToArray(currentWord).map((letter, index) => {
        return (
            <span className="letter" key={index}>{isLetterRight(letter) ? letter : ""}</span>
        )
    })

    const gameStatusClass = clsx("status", {
        won: isGameWon,
        lost: isGameLost
    })

    function renderGameStatus() {
        if (!isGameOver) {
            return null
        }

        if (isGameWon) {
            return (
                <>
                    <h2>You win!</h2>
                    <p>Well done! 🎉</p>
                </>
            )
        } else {
            return (
                <>
                    <h2>Game over!</h2>
                    <p>You lose! Better start learning Assembly 😭</p>
                </>
            )
        }
    }

    return (
        <main>
            <header>
                <h1>Assembly: Endgame</h1>
                <p> Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
            </header>
            <section className={gameStatusClass}>
                {renderGameStatus()}
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
            {isGameOver && <button className="new-game">New Game</button>}
        </main>
    )
}
