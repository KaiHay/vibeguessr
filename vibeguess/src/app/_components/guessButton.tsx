import { useState, type Dispatch, type SetStateAction } from "react"
import { pointCalc } from "./functions/distanceCalcs";
import { api } from "~/trpc/react";
import { useSession } from "next-auth/react";



export default function Guess({ markerPosition, destination, setGuess }:
    {
        markerPosition: [number, number] | null; destination: [number, number];
        setGuess: Dispatch<SetStateAction<boolean>>
    }) {

    const { data: session, status } = useSession()
    const addPoints = api.player.addPoints.useMutation();

    const [points, setPoints] = useState(0)
    console.log('Points: ', points);
    const clickGuess = () => {
        console.log('Pos: ', markerPosition)
        const calc = pointCalc(markerPosition, destination)
        setPoints(calc)
        setGuess((guess) => !guess)
        if (session?.user.id) {
            addPoints.mutate({ Id: session.user.id, addPoint: calc.toString() })
        } else {
            console.log('Not Logged In');

        }

    }
    if (!markerPosition) {
        return
    }
    if (points > 0) {
        const scorePercent = points / 1000

        return (
            <div className="pt-1">
                <div className="border border-black relative h-[26px] rounded-2xl">
                    <div className={`absolute z-10 transition-[width] duration-1000 h-6 rounded-2xl bg-green-600 ${points > 0 ? `w-[${Math.round(scorePercent * 100)}%]` : 'w-0'}`} />


                    <div className={`absolute w-full text-center items-center z-50`}>
                        You scored: {points.toFixed(3)}/1000
                    </div>
                </div></div>
        )
    }
    return (
        <div className='bg-amber-950 p-1 rounded-lg absolute bottom-4 left-4 z-10000'>
            <button className='' onClick={() => clickGuess()}>Guess</button>
        </div>
    )
}

