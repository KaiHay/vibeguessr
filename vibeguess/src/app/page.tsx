import Link from "next/link";
import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import { MapLocation } from "./_components/map";
import { PLACES } from "./api/imageGen/place";

export default async function Home() {
  const session = await auth();
  console.log(session?.user);

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }
  const place = PLACES[Math.floor(Math.random() * PLACES.length)]
  if (!place || !place.id) {
    return <div>lol</div>
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#406e00] to-[#15162c] text-white">
      <div className="">
        <img src={`../image-${place.id}.png`} alt="Generated" className='h-full w-full' />
      </div>
      <MapLocation />
    </main>

  );
}
