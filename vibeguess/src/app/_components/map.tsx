'use client'

import { MapContainer, TileLayer, Marker, useMapEvents, Popup } from 'react-leaflet'
import { useState } from 'react'

import L from 'leaflet'
import { number } from 'zod'

export function MapLocation() {
    const position: [number, number] = [51.505, -0.09]
    const [markerPosition, setMarkerPosition] = useState<[number, number] | null>(null)
    const [expanded, setExpand] = useState(false)
    const toggleMap = () => setExpand(!expanded)


    function LocationMarker() {
        useMapEvents({
            click(e) {
                const { lat, lng } = e.latlng
                setMarkerPosition([lat, lng])
            },
        })
        // Create a default Leaflet icon
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
                className={`fixed bottom-4 right-4 z-50 transition-all duration-300 border rounded-md shadow-md ${expanded ? 'w-[400px] h-[300px]' : 'w-[200px] h-[150px]'
                    }`}
            >
                <MapContainer
                    center={[51.505, -0.09]}
                    zoom={4}
                    scrollWheelZoom={true}
                    className="w-full h-full rounded-md border shadow-md"
                >                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <LocationMarker />
                </MapContainer>
            </div>
            <button className="absolute top-4 right-4 bg-white text-black px-4 py-2 rounded shadow z-10" onClick={toggleMap}>Toggle Map Size</button>
        </div>
    )
}