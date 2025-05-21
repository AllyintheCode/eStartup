import React from 'react'
import './index.css'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className='max-w-[1400px] mx-auto px-4'>
      <Navbar />
      <Header />
      <Footer />
    </div>
  )
}

export default App
