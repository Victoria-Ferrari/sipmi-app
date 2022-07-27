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
                    <h3 className="title">{beer.attributes.name}</h3>
                    <h3 className="type">{beer.attributes.type}</h3>
                    <h3 className="prod">{beer.attributes.brew_house}</h3>
                </h2>
            </div>
        </Link>
    </>
    )
}