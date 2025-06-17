import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() { 
  return(
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
