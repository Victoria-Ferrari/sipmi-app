import { Link } from "react-router-dom"

import './BeerCard.css'

export const Beercard = ({beer}) => {    

    return (
        <>
        <Link to={`/beer/${beer.id}`}>
            <div className="beerCard">
                <div className="beerCard-bg">
                    <img src={`${beer.attributes.Image_url}`} alt="" />
                </div>
                <h2 className="beerCard-info">
                    <span className="title">{beer.attributes.name}</span><br/>
                    <span className="prod">birrificio di produzione</span><br />
                    {/* <span className="type">{beer.attributes.tipo.data.attributes.beer_type}</span> */}
                </h2>
            </div>
        </Link>
    </>
    )
}