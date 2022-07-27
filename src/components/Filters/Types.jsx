import { useState, useEffect} from 'react'
import { TypeButton } from './TypeButton'

export const Types = () => {

    const[types, setTypes] = useState([])

    useEffect(()=>{
        const getTypes = async () =>{
            const response = await fetch("http://localhost:1337/api/types?populate=*")
            const {data} = await response.json()
            setTypes(data)
        }
        return getTypes
    }, [])
   
    return(
        <>
        <div className='type-list'>
            {
                types.map(type=>
                    <TypeButton key={type.id} type={type}/>
                )
            }
        </div>
        </>
    )
}