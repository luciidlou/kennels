import React from "react"
import { AnimalList } from "./animal/AnimalList"
import { AnimalProvider } from "./animal/AnimalProvider"
import { LocationList } from "./location/LocationList"

export const Kennel = () => {
    return (
        <>
            <h2>Nashville Kennels</h2>
            <AnimalProvider>
                <AnimalList />
            </AnimalProvider>
            <LocationList />
        </>
    )
}