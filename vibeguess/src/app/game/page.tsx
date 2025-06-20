import { redirect } from 'next/navigation'
import { v4 as uuidv4 } from 'uuid'

export default function Page() {
  const seed = uuidv4();
  redirect(`/game/${seed}`);
  return null; // This will never render, but is required for a component
}