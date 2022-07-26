import { Link } from "react-router-dom"

// import './Back.css'

export const Back = ({url}) => {
    return (
        <Link key={url} to={url} className="back" >
            <div className="back-icon">
                <button>back</button>
            </div>
        </Link>
    )
}