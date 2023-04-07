import React, {useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import '../styles/AllCharacters.css'

function AllCharacters() {
    const [ characters, setCharacters] = useState([])
    useEffect(() =>{
        fetch("https://rickandmortyapi.com/api/character")
        .then((res)=>res.json())
        .then((data)=>setCharacters(data.results))
    },[])
    
    return (
    <div className='charactersContainer'>
        {characters.map((character)=>{
            return(
                <div className='charactersContent' key={character.id}>
                    <Link to={`/character/${character.id}`}><img src={character.image} alt={character.name} /></Link>
                    <h1>{character.name}</h1>
                </div>
            )
        })}
        </div>
    )
}

export default AllCharacters