import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { Beercard } from "../../components/BeerCard/Beercard"
import { Types } from "../../components/Filters/Types";
import { ENDPOINT } from '../../libs/beers'

export const Beers = () => {
    const [beers, setBeers] = useState([])
    
    useEffect(() => {
        const getBeers = async () => {
            const response = await fetch(ENDPOINT + "?populate=*")
            const {data} = await response.json()
            setBeers(data)
            console.log(data)
        }

        return getBeers
    }, [])

    return (
        <main >
            <Types/>
            <h1>Pagina BBBBBIRRETTE</h1>
            {beers.map(beer => 
                <Beercard key={beer.id} beer={beer}/>
            )}
        </main>
    )
}