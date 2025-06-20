import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import {SessionProvider} from 'next-auth/react'
import { auth } from "~/server/auth";
export const metadata: Metadata = {
  title: "Vibe Guessr",
  description: "Guess the origins of the image!",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session= await auth()
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>
        <TRPCReactProvider>
          <SessionProvider session={session}>
            {children}
          </SessionProvider>

        </TRPCReactProvider>

      </body>
    </html>
  );
}
