import React, { useState } from 'react'
import "./index.css"
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Footer from './Components/Footer';
const App = () => {
  return (
    <div className='w-[1500px] mx-auto'>
      <Navbar />
      <Header />
      <Footer />
    </div>
  )
}

export default App