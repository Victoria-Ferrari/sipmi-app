import { Link } from "react-router-dom";

import './TypeButton.css'

export const TypeButton = ({type}) => {
    
    return (
            <Link className="typeButton" to={`/type/${type.id}`}>{type.attributes.beer_type}</Link>
    )
};