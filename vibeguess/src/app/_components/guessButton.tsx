import { useState } from "react"
import { PLACES } from "../api/imageGen/place"

const longLatToMile = () => {

}

const pointCalc = (guess: [number, number] | null, ans: [number, number]) => {
    if (!guess) return 0
    const [ansX, ansY] = ans
    const [guessX, guessY] = guess

    const difX = ansX - guessX
    const difY = ansY - guessY
    const totalDif = Math.sqrt(difX * difX + difY * difY)
    const points = 1000 - totalDif
    return points
}

export default function Guess({ markerPosition }: { markerPosition: [number, number] | null }) {
    const [points, setPoints] = useState(0)

    const clickGuess = () => {
        console.log('Pos: ', markerPosition)
        setPoints(pointCalc(markerPosition, [0, 0]))
        console.log('Points: ', points);

    }
    if (!markerPosition) {
        return
    }
    return (
        <div className='bg-amber-950 p-1 rounded-lg absolute bottom-4 left-4 z-10000'>
            <button className='' onClick={() => clickGuess()}>Guess</button>
        </div>
    )
}