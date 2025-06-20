//import Link from "next/link";
import { auth } from "~/server/auth";
import { api } from "~/trpc/server";
import Map from "../../_components/map";
import { PLACES } from "../../api/imageGen/place";
import Image from 'next/image'
import Rand, { PRNG } from 'rand-seed'

export default async function Home(props: { params: Promise<{id: string }> } ) {
  const { id } = await props.params

  const session = await auth()
  if (session) {
    if (session.user) {
      if (session.user.id) {
        api.player.create({ id: session.user.id })
      }
    }
  }
  const seededRand = new Rand(id)
  const rand = seededRand.next()
  console.log('seeded random number is: ', rand);

  const place = PLACES[Math.floor(rand * PLACES.length)]
  if (!place?.id) {
    return <div>lol</div>
  }


  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#406e00] to-[#15162c] text-white">
      <div className="">
        <Image src={`/image-${place.id}.png`} alt="Generated" fill className='' />
      </div>
      <Map destination={[place.lat, place.lng]} />
    </main>

  );
}
