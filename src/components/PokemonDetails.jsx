import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PokemonDetails = () => {

    const{id}=useParams()

    const [pokemon, setPokemon] = useState()

    useEffect(() => {
        const URL=`https://pokeapi.co/api/v2/pokemon/${id}/`
        axios.get(URL)
            .then(res => setPokemon(res.data) )
            .catch(error=>console.log(error))
    }, [])

    return (
        <div className='PokemonDetails'>
            <img src={pokemon?.sprites.other['home'].front_default} alt="pokemon-image" />
            <h5>{pokemon?.species.name}</h5>
        </div>
    )
}

export default PokemonDetails
