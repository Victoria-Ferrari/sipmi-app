import { Link } from "react-router-dom";

export const Navicons = ({path, classe}) =>{

    return(
        <>
        <Link to={path} className={classe}></Link>
    </>
    )
}