'use client'

import dynamic from 'next/dynamic'
import Image from "next/image";
import { useEffect, useState } from 'react';

// load the real map component only in the browser
const ClientLeafletMap = dynamic(() => import('./leafMap'), {
    ssr: false,
    loading: () => <p>Loading map…</p>,
})

export default function Map({ destination, placeID }: { destination: [number, number], placeID: [string, string, string] }) {
    const [totalPoints, setTotalPoints] = useState(0)
    const [currentRound, setCurrentRound] = useState(0)
    const [seconds, setSeconds] = useState(60)
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

    console.log("round",currentRound)

    return (
        <div className='relative w-full h-screen'>
            <div className='absolute top-2 z-10 left-1/2 -translate-x-1/2 flex flex-col text-center'>
                <h1 className='z-50 font-black text-green-500'>Time Remaining: {seconds} seconds</h1>
                {timeEnd && <h2>Time's up!</h2>}
            </div>
            <div className="">
                <Image src={`/image-${placeID[currentRound]}.png`} alt="Generated" fill className='' />
            </div>
            <ClientLeafletMap destination={destination} setRound={setCurrentRound} setPoints={setTotalPoints} />

        </div>
    )
}
