// import React from "react";
// import { useEffect, useState } from 'react'

// // import { SearchCard } from './SearchCard'
// import { useDebounce } from "use-debounce";

// import './Search.css'

// export const Search = () => {
//     const [text, setText] = useState("")
//     const [beers, setBeers] = useState(null)
//     const [isSearching, setIsSearching] = useState(false);
//     const [isActive, setIsActive] = useState(false);

//     const debouncedSearchTerm = useDebounce(text, 500); 

//     const getBeers = async (query) => {
//         const response = await fetch("http://localhost:1337/api/beers?filters[name]=" + query)
//         return await response.json()
//     }

//       useEffect(() => {
//         if (debouncedSearchTerm) {
//           setIsSearching(true)
//           getBeers(debouncedSearchTerm).then((res) => {
//             setBeers(res.data)
//             setIsSearching(false)
//           })
//         } else {
//           setIsSearching(false)
//           setBeers([])
//         }
//     }, [debouncedSearchTerm])
    

//       return (
//         <div className='search-section'>
//           <input
//             className="search"
//             type="text"
//             placeholder="Cerca"
//             onChange={(event) => setText(event.target.value.toLocaleLowerCase())}
//           />
    
//           <div className={isActive ? 'results active' : 'results'}>
//             {isSearching && <div>Searching ...</div>}
//             {beers && beers.map(beer => 
//               <SearchCard key={beer.id} beer={beer}/>
//             )}
//           </div>
//         </div>
//       )
// }