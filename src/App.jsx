import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Footer from './components/Footer'
import Home from './components/Home'
import {BrowserRouter,Routes,Route } from 'react-router-dom'

import Login from './components/Login'
function App() { 
  return(
    <>
    <BrowserRouter>
    <Header/>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
