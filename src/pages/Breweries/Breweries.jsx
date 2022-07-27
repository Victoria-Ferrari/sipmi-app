import React from "react";
import { useEffect, useState } from 'react'
import { Header } from "../../components/Header/Header";
import { Brewscard } from '../../components/BreweriesCard/Brewscard'
import { ENDPOINT } from '../../libs/breweries'

import './Brewery.css'
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
            <Header/>
            <h3 className="pageName">Lista delle birrerie</h3>
            {breweries.map(brewery => 
                <Brewscard key={brewery.id} brewery={brewery}/>
            )}
        </main>
    )
}