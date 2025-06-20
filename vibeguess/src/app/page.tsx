"use client"
import Link from "next/link"
import { signIn, useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import Image from 'next/image'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../components/ui/card"



export default function Login() {
    const { data: session, status } = useSession()
    if (session) {
        redirect(`/game`)
    }
    return (
        <div className="flex flex-col justify-center items-center h-screen w-full bg-gradient-to-bl from-blue-400 to-sky-950">
            <Image fill alt='login img' src='/login.png' className="" />
            <Card className="z-50 w-1/5 bg-black border-black">
                <CardHeader>
                    <CardTitle>
                        <div className="text-center text-amber-50 font-black">Vibe Guessr</div>

                    </CardTitle>
                    <CardDescription className="text-center">
                        Can you figure out where you are just on vibes?
                    </CardDescription>

                </CardHeader>
                <CardContent>
                    <div className="pb-1">
                        <button
                            onClick={async () => {
                                await signIn("google")
                            }} className="bg-amber-400 w-full p-1 rounded-2xl transition hover:-translate-x-0.5 hover:-translate-y-0.5">
                            Google SignIn
                        </button>
                    </div>
                </CardContent>
                <CardFooter className="justify-center">
                    <div className="bg-amber-400 p-1 rounded-2xl transition hover:-translate-x-0.5 hover:-translate-y-0.5">
                        <Link className='w-full p-1' href={'/game'}>Play as Guest</Link >
                    </div>
                </CardFooter>
            </Card>

        </div>
    )
}