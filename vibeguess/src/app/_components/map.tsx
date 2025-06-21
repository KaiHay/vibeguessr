'use client'

import dynamic from 'next/dynamic'
import Image from "next/image";
import Link from 'next/link';
import { useEffect, useState } from 'react';

// load the real map component only in the browser
const ClientLeafletMap = dynamic(() => import('./leafMap'), {
    ssr: false,
    loading: () => <p>Loading map…</p>,
})

export default function Map({ destination, placeID }: { destination: [[number, number], [number, number], [number, number]], placeID: [string, string, string] }) {
    const [totalPoints, setTotalPoints] = useState(0)
    const [currentRound, setCurrentRound] = useState(0)
    const [seconds, setSeconds] = useState(30)
    const [timeEnd, setTimeEnd] = useState(false)

    useEffect(() => {
        // If time reaches 0, stop the timer
        if (seconds <= 0) {
            setTimeEnd((curr) => !curr)
            return
        }

        const timerId = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds - 1)
        }, 1000); // Decrease the counter every second

        return () => clearInterval(timerId)
    }, [seconds])

    useEffect(() => {
        setSeconds(30)
    }, [currentRound])

    console.log("Total Points: ", totalPoints)
    if (currentRound == 3) {
        return (
            <div className='w-full h-screen flex flex-col justify-center gap-3 items-center bg-amber-700'>
                <div className='text-black font-black flex flex-row'>
                    You suck, you scored: <div className='text-cyan-100 pl-1 pr-1'>{totalPoints.toFixed(2)}</div> points in 3 rounds
                </div>

                <div className='bg-yellow-300 p-1 rounded-2xl transition-all hover:translate-x-1 hover:-translate-y-0.5'>
                <Link href={'/game'} className=' p-1 text-black cursor-pointer hover:text-gray-600 font-black'>New Game</Link>
                </div>
            </div>
        )
    }
    return (
        <div className='relative w-full h-screen'>
            <div className='absolute top-2 z-10 left-1/2 -translate-x-1/2 bg-gray-500 p-1 rounded-full flex flex-col text-center'>
                <h1 className='z-50 font-black text-white'>Time Remaining: {seconds} seconds</h1>
                {timeEnd && <h2>Time's up!</h2>}
            </div>
            <div className="">
                <Image src={`/image-${placeID[currentRound]}.png`} alt="Generated" fill className='' />
            </div>
            <ClientLeafletMap destination={destination[currentRound]!} setRound={setCurrentRound} setPoints={setTotalPoints} end={timeEnd} />

        </div>
    )
}
