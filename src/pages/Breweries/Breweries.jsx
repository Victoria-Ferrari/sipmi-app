import React from "react";
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { Brewscard } from '../../components/BreweriesCard/Brewscard'
import { ENDPOINT } from '../../libs/breweries'

export const Breweries = () => {
    const [breweries, setBreweries] = useState([])
    
    useEffect(() => {
        const getBreweries = async () => {
            const response = await fetch(ENDPOINT + "?populate=*")
            const {data} = await response.json()
            setBreweries(data)
        }

        return getBreweries
    }, [])

    return (
        <main>
            <h1>Pagina BBBBirrerie</h1>
            {breweries.map(brewery => 
                <Brewscard key={brewery.id} brewery={brewery}/>
            )}
            <Link to="/map">Map</Link>
        </main>
    )
}