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
          <span><svg width="13" height="19" viewBox="0 0 13 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.0961 1.98084C9.95966 0.798385 8.44262 0.0959584 6.83778 0.00912976C5.23295 -0.0776989 3.6541 0.457226 2.40595 1.51066C1.15779 2.5641 0.328823 4.06137 0.0790287 5.7135C-0.170766 7.36563 0.176323 9.05549 1.05331 10.457L5.57217 17.6768C5.67274 17.8374 5.81023 17.9694 5.9722 18.0608C6.13417 18.1521 6.31549 18.2 6.49972 18.2C6.68395 18.2 6.86527 18.1521 7.02724 18.0608C7.18921 17.9694 7.32671 17.8374 7.42727 17.6768L11.9463 10.457C12.76 9.1569 13.1196 7.60524 12.9649 6.06206C12.8101 4.51888 12.1503 3.07797 11.0961 1.98084V1.98084ZM10.9442 9.77754L6.49974 16.8782L2.05525 9.77754C0.694808 7.604 0.986593 4.69528 2.74904 2.86097C3.24158 2.34834 3.82632 1.94171 4.46987 1.66428C5.11342 1.38685 5.80317 1.24406 6.49974 1.24406C7.19631 1.24406 7.88607 1.38685 8.52961 1.66428C9.17316 1.94171 9.7579 2.34834 10.2504 2.86097C12.0129 4.69528 12.3046 7.604 10.9442 9.77754Z" fill="black"/>
          <path d="M6.4999 3.89844C5.98567 3.89844 5.48299 4.05092 5.05542 4.33662C4.62785 4.62231 4.2946 5.02837 4.09782 5.50346C3.90103 5.97855 3.84954 6.50132 3.94986 7.00567C4.05018 7.51002 4.29781 7.9733 4.66143 8.33691C5.02504 8.70053 5.48832 8.94816 5.99267 9.04848C6.49702 9.1488 7.01979 9.09731 7.49488 8.90052C7.96997 8.70373 8.37603 8.37049 8.66172 7.94292C8.94741 7.51535 9.0999 7.01267 9.0999 6.49844C9.09912 5.80911 8.82494 5.14825 8.33751 4.66083C7.85009 4.1734 7.18922 3.89922 6.4999 3.89844V3.89844ZM6.4999 7.79844C6.24279 7.79844 5.99145 7.72219 5.77766 7.57935C5.56388 7.4365 5.39725 7.23347 5.29886 6.99593C5.20047 6.75838 5.17472 6.49699 5.22488 6.24482C5.27504 5.99264 5.39886 5.76101 5.58066 5.5792C5.76247 5.39739 5.99411 5.27358 6.24629 5.22342C6.49846 5.17326 6.75985 5.199 6.99739 5.29739C7.23493 5.39579 7.43797 5.56241 7.58081 5.7762C7.72366 5.98998 7.7999 6.24132 7.7999 6.49844C7.7995 6.8431 7.66241 7.17352 7.4187 7.41724C7.17499 7.66095 6.84456 7.79804 6.4999 7.79844V7.79844Z" fill="black"/>
          </svg>
          {brewery.attributes.address}</span>
        </div>    
      </Link>
    </>
  )
};
