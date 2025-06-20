import { useEffect, useState, type Dispatch, type SetStateAction } from "react"
import { pointCalc } from "./functions/distanceCalcs";
import { api } from "~/trpc/react";
import { useSession } from "next-auth/react";
import Link from "next/link";



export default function Guess({ markerPosition, destination, setGuess }:
    {
        markerPosition: [number, number] | null; destination: [number, number];
        setGuess: Dispatch<SetStateAction<boolean>>
    }) {

    const { data: session, status } = useSession()
    const addPoints = api.player.addPoints.useMutation();

    const [points, setPoints] = useState(0)
    const [playerPoints, setPlayerPoints] = useState(0)
    const [distance, setDistance] = useState(0)
    const [ready, setReady] = useState(false)
    console.log('Points: ', points);
    const clickGuess = () => {
        console.log('Pos: ', markerPosition)
        const [calc, dist] = pointCalc(markerPosition, destination)
        setDistance(dist)
        setPoints(calc)
        setGuess((guess) => !guess)
        if (session?.user.id) {
            addPoints.mutate({ Id: session.user.id, addPoint: calc.toString() })
        } else {
            console.log('Not Logged In');

        }

    }
    useEffect(() => {
        setReady(false);                     // reset to 0 %
        const id = setTimeout(() => setReady(true), 500); // 50 ms delay
        return () => clearTimeout(id);
    }, [points]);

    if (!markerPosition) {
        return
    }
    if (points > 0) {
        const scorePercent = points / 1000

        return (
            <div className="pt-1 ">
                <div className=" p-1 rounded-md">
                    <div className="border border-black bg-stone-700 relative flex flex-col h-[26px] rounded-2xl">
                        <div className="">
                            <div className="absolute z-20 transition-[width] ease-out duration-1000 h-6 rounded-2xl bg-green-600" style={{ width: ready ? `${Math.round(scorePercent * 100)}%` : '0%' }} />


                            <div className={`absolute w-full text-center font-black text-white items-center z-50`}>
                                Score:  {points.toFixed(2)} / 1000
                            </div>
                            <div className="opacity-0">hi</div>
                        </div>
                        <div className="text-center ">
                            {distance ? (<div className="flex flex-row w-full justify-evenly pt-1 items-center">
                                <div className="p-1 bg-[#114412] font-black text-gr rounded-md translate-y-[1px]">
                                    <div className={``}>You were {distance.toFixed(2)} miles away</div>
                                </div>
                                <div className="bg-black border border-black font-black rounded-md p-1 translate-y-[1px] transition-all hover:translate-x-1" >
                                    <div className={``}>
                                        <Link href={'/'} className="flex flex-row ">
                                            <div>Next</div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">

                                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                            </svg>
                                        </Link></div>
                                </div>
                            </div>)
                                : ''}
                        </div>


                    </div></div></div>
        )
    }
    return (
        <div className='bg-red-800 w-1/4 min-w-[70px] text-center p-1 rounded-lg absolute bottom-4 left-4 z-10000'>
            <button className='w-full' onClick={() => clickGuess()}>Guess</button>
        </div>
    )
}

