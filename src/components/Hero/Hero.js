import React from 'react'
import HeroImage from '../../assets/trafalgar-header illustration 1.png'
import './hero.css'

function Hero() {
  return (
    <div className='container mt-5'>
        <div className='row'>
            <div className='col-sm-12 col-md-12 col-lg-6 hero-texts'>
                <h2>Virtual healthcare <br /> for you</h2>
                <p className='mt-3'>Trafalgar provides progressive, and affordable <br />
                    healthcare, accessible on mobile and online <br />
                    for everyone
                </p>
                <button className='mt-3'>Consult Today</button>
            </div>
            <div className='col-sm-12 col-md-12 col-lg-6'>
                <img src={HeroImage} alt='Hero' className='hero-img' />
            </div>
        </div>
    </div>
  )
}

export default Hero
