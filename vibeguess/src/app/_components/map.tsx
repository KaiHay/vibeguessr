'use client'

import dynamic from 'next/dynamic'

// load the real map component only in the browser
const ClientLeafletMap = dynamic(() => import('./leafMap'), {
    ssr: false,
    loading: () => <p>Loading map…</p>,
})

export default function Map() {
    return <ClientLeafletMap />
}
