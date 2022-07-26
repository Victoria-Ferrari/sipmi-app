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
          <h2>{brewery.attributes.name}</h2>
          <span>{brewery.attributes.address}</span>
 
            {/* 
              READ MORE - READ LESS
              https://stackoverflow.com/questions/40255345/maximum-amount-of-characters-in-a-div-paragraph-tag-in-react*/}
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
