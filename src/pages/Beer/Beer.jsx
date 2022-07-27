import { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom' /* lavora con il router, restituisce un oggetto (coppia chiave valore) dei parametri dinamici dell'url abbinati al router path */
import { Brewscard } from '../../components/BreweriesCard/Brewscard'
import { BackButton } from '../../components/BackButton/BackButton'

import './Beer.css'

export const Beer = () => {
    const [beer, setBeer] = useState()
    const params = useParams()

    useEffect(() => {
        const getBeer = async () => {
            const response = await fetch(`http://localhost:1337/api/beers/${params.id}?populate=*`)
            const {data} = await response.json()

            setBeer(data)
            console.log(data);
        }

        return getBeer
    }, []) 
    // console.log(beer)
    return(
        <main>
            <BackButton url="/beers" />
            {beer &&
            <>
                <div className="beer-cover">
                    <h1>{beer.attributes.name}</h1>
                    <h2>{beer.attributes.type}</h2>

                    <div className='beer-info'>
                        <h2 className='tac'>{beer.attributes.density}°P</h2>
                        <h2 className='tac'>{beer.attributes.gradation}% VOL</h2>
                        <h2 className='tac'>IBU{beer.attributes.ibu}</h2>
                    </div>

                        <img src={`http://localhost:1337${beer.attributes.cover.data.attributes.formats.small.url}`} alt="" />
                  
                </div>
                <h2>Descrizione</h2>
                <p>{beer.attributes.description}</p>
                {/* mappa birrifici che la vendono */}
                <div>
                        <h2>Dove la trovo</h2>
                        {beer.attributes.breweries.data.map(brewery =>
                            <Brewscard key={brewery.id} brewery={brewery}/>
                        )}
                </div>
            </>
            }
        </main>
    )
}