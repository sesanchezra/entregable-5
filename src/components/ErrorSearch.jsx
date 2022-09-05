import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
import { IconContext } from "react-icons";
import { BiErrorCircle } from "react-icons/bi";
import './ErrorSearch.css'

const ErrorSearch = ({ setSearch, search, setErrorSearch, errorSearch ,setPokemons}) => {

    const navigate = useNavigate()

    const goBack = () => {
        setSearch(false)
        setErrorSearch(!errorSearch)
        setPokemons()
        console.log(search)
    }

    return (
        <div className='ErrorSearch'>
            <div className='errorsearch__box'>
                <IconContext.Provider value={{ color: "white", size: '4em' }}>
                    <BiErrorCircle />
                </IconContext.Provider>
                Error, no se encuentra el pokemon
                <button onClick={goBack}>
                    <IconContext.Provider value={{ color: "black", size: '2em' }}>
                        <IoIosArrowBack />
                    </IconContext.Provider>
                </button>
            </div>

        </div>
    )
}

export default ErrorSearch
