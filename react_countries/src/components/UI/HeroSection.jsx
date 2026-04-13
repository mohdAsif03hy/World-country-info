import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const HeroSection = () => {
  return (
    <main className='hero-section'>
      <div className='container grid grid-two-cols'>
        
        <div className='hero-content'>
          <h1>Explore the world with us, One Country at a Time.</h1>
          
          <p className='paragraph'>
            Discover the beauty and diversity of our planet with us. 
            From stunning landscapes to vibrant cultures, we bring you closer 
            to the wonders of the world.
          </p> 

          <NavLink to="/country" style={{ textDecoration: "none" }}>
            <button className='btn btn-darken btn-inline btn-white-box'>
            Start Exploring <FaLongArrowAltRight />
          </button>
          </NavLink>
        </div>

        <div className='hero-image'>
          <img 
            src="/images/world.png" 
            alt="world beautiful" 
            className='banner-image' 
          />
        </div>

      </div>
    </main>
  )
}

export default HeroSection
