'use client'

import { MapContainer, TileLayer, Marker, useMapEvents, Popup } from 'react-leaflet'
import { useEffect, useRef, useState } from 'react'

import L, { Map as LeafletMap } from 'leaflet'
import Guess from './guessButton'
const personDivIcon = L.divIcon({
    html: `<div style="
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    background: red;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 20px;
                    border: 1px solid black;
                ">🧍</div>`,
    className: '',
    iconSize: [32, 32],
    iconAnchor: [16, 16],
})
export default function MapLocation({ destination }: { destination: [number, number] }) {
    //const position: [number, number] = [51.505, -0.09]
    const [markerPosition, setMarkerPosition] = useState<[number, number] | null>(null)
    const [expanded, setExpand] = useState(false)
    const toggleMap = () => setExpand(!expanded)
    const [guessed, setEnd] = useState(false)

    const expandContent = 'no'
    const mapRef = useRef<LeafletMap | null>(null)

    useEffect(() => {
        const id = setTimeout(() => mapRef.current?.invalidateSize(), 310) // 300ms + a hair
        return () => clearTimeout(id)
    }, [expanded, guessed])
    //Guess button has on click, calculate - > end and show
    //Onclick needs marker location and destination location

    function LocationMarker() {
        useMapEvents({
            click(e) {
                const { lat, lng } = e.latlng
                setMarkerPosition([lat, lng])
            },
        })


        return markerPosition ? (
            <Marker position={markerPosition} icon={personDivIcon}>
                <Popup>
                    You clicked at:<br />
                    {markerPosition[0].toFixed(4)}, {markerPosition[1].toFixed(4)}
                </Popup>
            </Marker>
        ) : null
    }

    return (
        <div>
            <div
                className={`
                 fixed transition-all duration-300 border rounded-md shadow-md 
                    ${guessed
                        ? 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px]'
                        : 'bottom-4 right-4 z-50'} 
                ${expanded ? 'w-[600px] h-[400px]' : 'w-[200px] h-[150px]'
                    }`}
            >
                <div className={`relative ${guessed ? 'w-[700px] h-[500px]' : ''} ${expanded ? 'w-[600px] h-[400px]' : 'w-[200px] h-[150px]'}`}>
                    {guessed ? '' : <button className="absolute top-4 right-4 bg-white text-black px-2 py-2 rounded shadow z-10000" onClick={toggleMap}>{expanded ? expandContent : 'lol'}</button>}
                    <MapContainer
                        ref={mapRef}
                        center={[51.505, -0.09]}
                        zoom={3}
                        scrollWheelZoom={true}
                        className="w-full h-full rounded-md border shadow-md"
                    >
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <LocationMarker />
                        {guessed ? <Marker position={destination} icon={personDivIcon} ></Marker> : ''}
                    </MapContainer>
                    <Guess markerPosition={markerPosition} destination={destination} setGuess={setEnd} />
                </div>
            </div>
        </div>
    )
}