'use client' 
import {createContext, useContext} from 'react'

export type Place = {
    id: string
    name: string
    lat: number
}