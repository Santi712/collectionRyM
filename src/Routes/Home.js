import React from 'react'
import Footer from '../components/Footer';
import Personajes from '../components/Personajes'
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div>
        <Navbar />
        <Personajes />
        <Footer />
    </div>
  )
}

export default Home;