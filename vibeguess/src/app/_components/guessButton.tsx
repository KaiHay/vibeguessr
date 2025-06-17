import { useState } from "react"

const distanceAway = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
    const R_KM = 6_371;
    const KM_TO_MILES = 0.621371;
    const toRad = (deg: number) => (deg * Math.PI) / 180;


    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);

    const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos(toRad(lat1)) *
        Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) ** 2;

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const km = R_KM * c;

    return km * KM_TO_MILES;

}

const pointCalc = (guess: [number, number] | null, ans: [number, number]) => {
    console.log('marker Passed: ', guess)
    if (!guess) {
        console.log('why are you here')
        return 0
    }
    const [ansX, ansY] = ans
    const [guessX, guessY] = guess
    const totalDif = distanceAway(ansX, ansY, guessX, guessY)
    console.log('Miles Away: ', totalDif);

    const points = 1000 / (1 + Math.pow(totalDif / 1000, 3))

    return points
}

export default function Guess({ markerPosition, destination }: 
    { markerPosition: [number, number] | null; destination: [number, number] }) {
    const [points, setPoints] = useState(0)
    console.log('Points: ', points);
    const clickGuess =  () => {
        console.log('Pos: ', markerPosition)
        setPoints(pointCalc(markerPosition, destination))


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

