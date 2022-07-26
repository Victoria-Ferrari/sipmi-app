import { useNavigate } from "react-router-dom"

// import './BackButton.css'

export const BackButton = ({url}) => {
    const navigate = useNavigate()

    return (
        /* Click -> pagina precedente */
        <div className="backButton" onClick={() => navigate(-1)}>
            <p>Back</p>
        </div>
    )
}