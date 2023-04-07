import React, {useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import '../styles/OneCharacter.css'

function OneCharacter() {
    const param = useParams()
    const [ character, setCharacter ] = useState([])
    useEffect(()=>{
        fetch(`https://rickandmortyapi.com/api/character/${param.id}`)
        .then((res)=>res.json())
        .then((data)=>setCharacter(data))
    },[param.id])
    
    return (
        <div className='characterContainer'>
            <div className='characterContent' key={character.id}>
                <img src={character.image} alt={character.name}></img>
                <h1>{character.name}</h1>
                <h3>Status: {character.status}</h3>
                <h3>Especie: {character.species}</h3>
                <h3>Gender: {character.gender}</h3>
                <Link to='/'><button className='basic-btn'>Back</button></Link>
            </div>
        </div>
    )
}

export default OneCharacter



/*<div className='characterContainer'>
<div className='characterContent' key={character.id}>
    <h1>{character.name}</h1>
    <img src={character.image} alt={character.name}></img>
    <h2>Status: {character.status}</h2>
    <ul>
        <li>Especie: {character.species}</li>
        <li>Gender: {character.gender}</li>
        <li>Origin: {character.origin.name}</li>
        <li>Location: {character.location.name}</li>
    </ul>
    <Link to='/'><button className='basic-btn'>Back</button></Link>
</div>
</div>*/