import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './assets/Pages/Home'
import About from './assets/Pages/About'
import Properties from './assets/Pages/Properties'
import FAQ from './assets/Pages/FAQ'
import Contact from './assets/Pages/Contact'
import Services from './assets/Pages/Services'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter >
     <Header/>
     <Routes>
     <Route path = '/' element = { <Home/>}/>
     <Route path = '/About' element = { <About/>}/>
     <Route path = '/Services' element = { <Services/>}/>
     <Route path = '/Properties' element = { <Properties/>}/>
     <Route path = '/FAQ' element = { <FAQ/>}/>
     <Route path = '/Contact' element = { <Contact/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
