import { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom' 
import { Beercard } from '../../components/BeerCard/Beercard'
import { BackButton } from '../../components/BackButton/BackButton'

import './Brewery.css'

export const Brewery = () => {
    const [brewery, setBrewery] = useState()
    const params = useParams()

    // const [beers, setBeers] = useState([])

    useEffect(() => {
        const getBrewery = async () => {
            const response = await fetch(`http://localhost:1337/api/breweries/${params.id}?populate=*`)
            const {data} = await response.json()

            setBrewery(data)
        }
        
        return getBrewery
    }, []) 
    return(
        
        <>
            <BackButton url="/" />
            <main>
            {brewery &&
                <div>
                    <div className='brew-header'>
                        <div className="brewery-cover"
                            style={{
                                width: "100%",
                                height: "300px",
                                backgroundImage: `url(http://localhost:1337${brewery.attributes.cover.data.attributes.url})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                            }}>
                        </div>
                        <div className='brew-title'>
                            <h2>{brewery.attributes.name}</h2>
                            <span>{brewery.attributes.address}</span>
                        </div>
                        <div className='brew-logo'>
                            <img src={`http://localhost:1337${brewery.attributes.logo.data.attributes.url}`} alt=""/>
                        </div>
                    </div>
                    <div className='taplist'>
                        <h2>Taplist</h2>
                        {brewery.attributes.beers.data.map(beer =>
                            <Beercard key={beer.id} beer={beer}/>
                        )}

                    </div>
               </div>   
            }</main>
        </>
    )
}