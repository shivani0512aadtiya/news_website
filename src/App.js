import React from 'react'
import Navbar from './Components/Navbar'
import Card from './Components/Card'
import Cards from './Components/Cards'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Components/Home'
import News from './Components/News'

const App = () => {
  return (
    <>

       <Navbar/>
       <div>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/news' element={<News />}></Route>
        </Routes>
       </div>
        <Footer/>
        <div>hii</div>
    </>
  )
}

export default App