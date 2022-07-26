/* Pagina categoria di birra singola -> card birre associate */
import React from "react";
import { useParams } from 'react-router-dom' /* lavora con il router, restituisce un oggetto (coppia chiave valore) dei parametri dinamici dell'url abbinati al router path */

import { useEffect, useState } from 'react'

import { Beercard } from "../components/BeerCard/Beercard";
import { BackButton } from "../components/BackButton/BackButton";

// import { ENDPOINT } from '../libs/types'

export const Type = () => {
    const [type, setType] = useState()
    const params = useParams()

    useEffect(() => {
        const getType = async () => {
            const response = await fetch(`http://localhost:1337/api/types/${params.id}?populate=*`)
            const {data} = await response.json()

            setType(data)
        }
        
        return getType
    }, []) 
    console.log(type);

    return (
        <>
        <BackButton/>
        {type &&
        <main>
            
            <h1>Pagina tipo singolo</h1>
            <div className="list-beers">
                {type.attributes.beers.data.map(beer => 
                        <Beercard key={beer.id} beer={beer}/>
                    )}
            </div>
            {/* {type.attributes.beers.data.map(beer => 
                <Beercard key={beer.id} beer={beer}/>
            )} */}
            {console.log(type)}
        </main>
            }
        </>
    )
}