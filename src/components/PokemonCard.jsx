import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../components/PokemonCard.css'

const PokemonCard = ({ url }) => {

    const [pokemon, setPokemon] = useState()

    useEffect(() => {
        axios.get(url)
            .then(res => setPokemon(res.data))
            .catch(error => console.log(error))
    }, [])

    // console.log(pokemon?.sprites.front_default)
    // console.log(pokemon?.pokemon?.sprites.front_default)

    console.log(pokemon)
    return (
        <div className='PokemonCard'>
                <div className='pokemoncard__avatar__section'>
                    <img src={pokemon?.sprites.other['home'].front_default} alt="pokemon-image" className='pokemoncard__avatar' />
                    <div className='pokemoncard__avatar__shadow'></div>
                </div>
                <h5>{pokemon?.species.name}</h5>
        </div>
    )
}

export default PokemonCard
