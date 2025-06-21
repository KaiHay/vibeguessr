'use client'

import { MapContainer, TileLayer, Marker, useMapEvents, Popup, Polyline } from 'react-leaflet'
import { useEffect, useRef, useState, type Dispatch, type SetStateAction } from 'react'

import L, { type LatLngBoundsLiteral, Map as LeafletMap } from 'leaflet'
import Guess from './guessButton'
import { set } from 'zod'
import type { N } from 'vitest/dist/chunks/environment.d.cL3nLXbE.js'
const personDivIcon = L.divIcon({
    html: `<div style="
                    width: 16px;
                    height: 22px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 20px;
                    opacity: 90%;
                ">🧍</div>`,
    className: '',
    iconSize: [32, 32],
    iconAnchor: [10, 22],
})

const targetDivIcon = L.divIcon({
    html: `<div style="
                    width: 32px;
                    height: 32px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 20px;
                ">📍</div>`,
    className: '',
    iconSize: [32, 32],
    iconAnchor: [16, 25],
})
const expandIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
</svg>
const expandContent = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
</svg>
export default function MapLocation({ destination, setRound, setPoints }:
     { destination: [number, number], 
        setRound: Dispatch<SetStateAction<number>>,
        setPoints: Dispatch<SetStateAction<number>>
     }) {
    //const position: [number, number] = [51.505, -0.09]
    const [markerPosition, setMarkerPosition] = useState<[number, number] | null>(null)
    const [expanded, setExpand] = useState(false)
    const toggleMap = () => setExpand(!expanded)
    const [guessed, setEnd] = useState(false)
    const mapRef = useRef<LeafletMap | null>(null)
    const [boundery, setBoundery] = useState<LatLngBoundsLiteral>([[0, 0], [10, 10],])
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
    useEffect(() => {
        if (guessed && markerPosition) {
            setBoundery([markerPosition, destination])
            mapRef.current?.fitBounds([markerPosition, destination])
        }
    }, [guessed, markerPosition, destination])
    console.log(guessed)
    return (
        <div>
            <div
                className={`
                 fixed transition-all duration-300 border rounded-md shadow-md 
                    ${guessed
                        ? 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[650px] bottom-auto right-auto'
                        : 'bottom-4 right-4 z-50'} 
                ${guessed ? `` : (expanded ? 'w-[800px] h-[650px]' : 'w-[200px] h-[150px]')
                    }`}
            >
                <div className={`relative ${guessed ? 'w-[800px] h-[650px]' : (expanded ? 'w-[800px] h-[650px]' : 'w-[200px] h-[150px]')}`}>
                    {guessed ? '' : <button className="absolute top-4 right-4  text-black  rounded  z-10000" onClick={toggleMap}>{expanded ? expandContent : expandIcon}</button>}
                    <MapContainer
                        ref={mapRef}
                        maxBounds={[[-90, -180], [90, 180]]}
                        maxBoundsViscosity={1.0}
                        zoom={3}
                        scrollWheelZoom={true}
                        bounds={boundery}//{guessed?[51,0.09]:null}
                        className="w-full h-full rounded-md border shadow-md"
                    >
                        {/* <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
                        <TileLayer
                            url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=vGqYxQ6P8yJfnqlhikVh "
                            attribution='&copy; <a href="https://www.maptiler.com/copyright/">MapTiler</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <LocationMarker />
                        {guessed ? <Marker position={destination} icon={targetDivIcon} /> : ''}
                        {guessed ? <Polyline pathOptions={{ color: 'green' }} positions={[markerPosition!, destination]} /> : ''}
                    </MapContainer>
                    <Guess markerPosition={markerPosition} destination={destination} setGuess={setEnd} setRound={setRound} setTPoints={setPoints}/>
                </div>
            </div>
        </div>
    )
}