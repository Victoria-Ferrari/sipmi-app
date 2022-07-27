import { Link } from "react-router-dom";
import './Brewscard.css'

export const Brewscard = ({brewery}) => {

  return(
    <>
      <Link className="card" to={`/brewery/${brewery.id}`}>
        <div className="card-description">
          <div className="brewscard-cover"
            style={{
              width: "100%",
              height: 193,
              backgroundImage: `url(${brewery.attributes.cover_url})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}>
          </div>
          <h3>{brewery.attributes.name}</h3>
          <span>{brewery.attributes.address}</span>
        </div>    
      </Link>
    </>
    
  )

  // /**
  //  * Fallback value
  //  */
  // const item = props.item || {
  //   photo: "",
  //   name: "N/A",
  //   notes: "en error occured",
  //   timing: 0,
  //   height: 0,
  // };

  // const noAction = props.noAction || false;

};
