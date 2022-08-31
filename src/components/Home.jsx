import React from 'react'
import './Home.css'
import Pokemon from '../assets/pokemon-23.svg'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { setName } from '../store/slices/name.slice'
import { FiSend } from "react-icons/fi";
import { IconContext } from "react-icons";
import { useNavigate } from 'react-router-dom'

const defaultValue = {
    name: ''
}

const Home = () => {

    const { register, handleSubmit, reset } = useForm()

    const dispatch = useDispatch()

    const setTrainer = (name) => dispatch(setName(name))

    const navigate=useNavigate()

    const submit = (data) => {
        setTrainer(data.name)
        reset(defaultValue)
        navigate('/pokedex')
    }



    return (
        <form className='Home' onSubmit={handleSubmit(submit)}>
            <div className='mask'></div>
            <div className='home__form'>
                <img src={Pokemon} alt="pokemon" />
                <div className='home__form__text'>
                    <h2>¡ Hello trainer ! 👋 </h2>
                    <h3>To get started, type your name bellow</h3>
                </div>
                <div className='home__form__input'>
                    <input type="text" id='name' placeholder='   Enter your name' {...register('name')} />
                    <button>
                        <IconContext.Provider value={{ color: "white", className: "global-class-name", size: '1.5em' }}>
                            <FiSend />
                        </IconContext.Provider>
                    </button>
                </div>

            </div>

        </form>
    )
}

export default Home
