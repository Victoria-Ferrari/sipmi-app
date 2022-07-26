import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'


// import { Icon } from '../Icons/icons'
import './Navbar.css'
import '../../App.css'

export const Navbar = () => {
    return(
        <div className="navbar">
            <div className="icons-menu">
                <ul>
                    <Link to="/beers">Birre</Link>
                    <Link to="/">Birrerie</Link>
                </ul>          
            </div>
        </div>
    )
}