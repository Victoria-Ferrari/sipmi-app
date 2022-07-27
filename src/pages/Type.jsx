/* Pagina categoria di birra singola -> card birre associate */
import React from "react";
import { useParams } from 'react-router-dom' 

import { useEffect, useState } from 'react'
import { Beercard } from "../components/BeerCard/Beercard";
import { BackButton } from "../components/BackButton/BackButton";

import '../components/Filters/TypeButton.css'
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
                    <h3>Tipo: {type.attributes.beer_type}</h3>
                    <div className="list-beers">
                        {type.attributes.beers.data.map(beer => 
                            <Beercard key={beer.id} beer={beer}/>
                        )}
                    </div>
                    {/* {console.log(type)} */}
                </main>
            }
        </>
    )
}