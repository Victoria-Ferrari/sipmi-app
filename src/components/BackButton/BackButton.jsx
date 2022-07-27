import { useNavigate } from "react-router-dom"

import './BackButton.css'

export const BackButton = () => {
    const navigate = useNavigate()

    return (
        /* Click -> pagina precedente */
        <div className="backButton" onClick={() => navigate(-1)}>
            <svg width="60" height="53" viewBox="0 0 60 53" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="60" height="53" rx="11" fill="#141414"/>
            <path d="M27.1734 32.6195L26 33.7929L18.7071 26.5L26 19.2071L27.1734 20.3805L22.7526 24.8136L21.9019 25.6667H23.1067H41.5V27.3333H23.1067H21.9019L22.7526 28.1864L27.1734 32.6195Z" fill="#E8F0FE" stroke="#E8F0FE"/>
            </svg>
        </div>
    )
}