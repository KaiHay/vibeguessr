//import Link from "next/link";
import { auth } from "~/server/auth";
import { api } from "~/trpc/server";
import Map from "../../_components/map";
import { PLACES } from "../../api/imageGen/place";
import Image from 'next/image'
import Rand, { PRNG } from 'rand-seed'
import { redirect } from "next/navigation";

export default async function Home(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params


  const session = await auth()
  if (session) {
    if (session.user) {
      if (session.user.id) {
        api.player.create({ id: session.user.id })
      }
    }
  }
  let rand = 0
  if (id == 'daily') {
    if (session) {
      const date = new Date();
      const day = date.getDate(); // Day of the month (1-31)
      const month = date.getMonth() + 1; // Month (0-11), adding 1 to make it 1-12
      const year = date.getFullYear(); // Year (e.g., 2023)
      
      const dailyID = id + day + month + year
      const seededRand = new Rand(dailyID)
      rand = seededRand.next()
      console.log('seeded random number is: ', rand);
    } else {
      redirect('/')
      return
    }
  } else {


    const seededRand = new Rand(id)
    rand = seededRand.next()
    console.log('seeded random number is: ', rand);
  }
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
