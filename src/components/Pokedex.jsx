import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { HiOutlineMenuAlt2, HiSearch } from "react-icons/hi";
import './Pokedex.css'
import { IconContext } from "react-icons";
import Pokeball from '../assets/Pokeball.svg'
import { useForm } from 'react-hook-form';
import PokemonCard from './PokemonCard';
import axios from 'axios';
import ErrorSearch from './ErrorSearch';
import Pagination from './Pagination';

const defaultValue = {
    search: ''
}

const Pokedex = () => {

    // Useform para el formulario

    const { register, handleSubmit, reset } = useForm()

    const navigate = useNavigate()

    //Llamando el estado globa de redux con el nombre

    const name = useSelector(state => state.nameSlice)

    //Función de búsqueda

    const [search, setSearch] = useState()

    const submit = (data) => {
        setSearch(data.search.toLowerCase())
        console.log(data.search)
        reset(defaultValue)
    }

    const [pokemons, setPokemons] = useState()
    const [errorSearch, setErrorSearch] = useState(false)

    //UseEffect para la busqueda y petición inicial de pokemones

    useEffect(() => {
        if (search) {
            const URL = `https://pokeapi.co/api/v2/pokemon/${search}/`
            axios.get(URL)
                .then(res => {
                    setPokemons(res.data)
                })
                .catch(error => {
                    console.log(error)
                    setErrorSearch(!errorSearch)
                })
        }
        else {
            const URL = `https://pokeapi.co/api/v2/pokemon/`
            axios.get(URL)
                .then(res => {
                    setPokemons(res.data.results)
                    console.log(res.data)
                })
                .catch(error => console.log(error))
        }

    }, [search])


    // Paginacion

    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(8)

    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    

    return (
        <div className='Pokedex'>
            <img src={Pokeball} alt="" className='pokedex__pokeball' />

            <div className='pokedex__header'>
                <IconContext.Provider value={{ color: "white", className: 'pokedex__header__icon', size: '2.2em' }}>
                    <HiOutlineMenuAlt2 />
                </IconContext.Provider>
            </div>
            <div className='pokedex__content'>
                <h3>{`Welcome 👋 , ${name} !`}</h3>
                <h4>Here are your favorite pokemon</h4>
                <form className='pokedex__content__form' onSubmit={handleSubmit(submit)}>
                    <input type="text" id='search' placeholder='       Search Here' {...register('search')} />
                    <button>
                        <IconContext.Provider value={{ color: "white", className: 'search', size: '2em' }}>
                            <HiSearch />
                        </IconContext.Provider>
                    </button>
                </form>
                <div className='pokedex__cards'>
                    {
                        errorSearch ?
                            <ErrorSearch
                                setSearch={setSearch}
                                search={search}
                                setErrorSearch={setErrorSearch}
                                errorSearch={errorSearch}
                                setPokemons={setPokemons}
                            />
                        :

                            pokemons?.length >= 0 ?
                                pokemons?.map(pokemon => (
                                    <PokemonCard
                                        key={pokemon.name}
                                        url={pokemon.url}
                                    />
                                ))
                            :

                                <PokemonCard
                                    key={pokemons?.name}
                                    url={pokemons?.url}
                                />

                    }

                    {

                    }

                </div>

                



            </div>

        </div>
    )
}

export default Pokedex
