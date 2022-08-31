import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import Pokedex from './components/Pokedex'
import PokemonDetails from './components/PokemonDetails'

function App() {

  //Link to design: https://dribbble.com/shots/17332968-Pok-dex-Apps-Design-Exploration

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/> }/>

        <Route element={<ProtectedRoute/>}>
          <Route path='/pokedex' element={<Pokedex /> }/>
          <Route path='/pokedex/:id' element={<PokemonDetails /> }/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
