import React, { useEffect, useContext } from "react"
import { AnimalContext } from "./AnimalProvider"

export const AnimalList = () => {
    const { animals, getAnimals } = useContext(AnimalContext)

    useEffect(
        () => {
            console.log(`AnimalList: useEffect - getAnimals`)
            getAnimals()
        },
        [getAnimals]
    )

    return (
        <>
            <h2>List of animals</h2>
            <section className="animals">
                {
                    animals.map(animal => {
                        return (
                            <div className="animal" key={`animal--${animal.id}`} id={`animal--${animal.id}`}>
                                <div className="animal__name">
                                    Name: {animal.name}
                                </div>
                                <div className="animal__breed">
                                    Breed: {animal.breed}
                                </div>
                            </div>
                        )
                    })
                }
            </section>
        </>
    )
}