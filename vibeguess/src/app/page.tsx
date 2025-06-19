"use client"
import Link from "next/link"
import { signIn, useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import { api } from "~/trpc/server"
import Image from 'next/image'

export default function Login() {
    const { data: session, status } = useSession()
    if (session) {
        redirect(`/game`)
    }
    return (
        <div className="flex flex-col justify-center items-center h-screen w-full bg-gradient-to-bl from-blue-400 to-sky-950">
            <Image fill alt='login img' src='/login.png' className="" />
            {/* <div className="flex flex-col items-center gap-2"> */}
            <div className="z-20">
                <div className="text-center">Vibe Guesser</div>
                <div className="pb-1">            <button
                    onClick={async () => {

                        await signIn("google")

                    }} className="bg-amber-400 w-full p-1 rounded-2xl transition hover:-translate-x-0.5 hover:-translate-y-0.5"
                >Google SignIn</button></div>

                <div className="bg-amber-400 p-1 rounded-2xl transition hover:-translate-x-0.5 hover:-translate-y-0.5">
                    <Link className='w-full p-1' href={'/game'}>Play as Guest</Link >
                </div>
            </div>

        </div>
    )
}