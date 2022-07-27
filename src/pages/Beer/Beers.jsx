import { useEffect, useState } from 'react'
import { Header } from '../../components/Header/Header'
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
            // console.log(data)
        }

        return getBeers
    }, [])

    return (
        <main >
            <Header />
            {/* <h3>Cerca per tipo</h3> */}
            <Types/>
            <h3>La lista delle birre</h3>
            {beers.map(beer => 
                <Beercard key={beer.id} beer={beer}/>
            )}
        </main>
    )
}