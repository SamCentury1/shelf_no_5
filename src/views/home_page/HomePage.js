import React from 'react'
import './HomePage.css'

const HomePage = () => {
  return (
    <div className='homepage-container'>
      <img src={require('../../assets/img/chloe-bolton-R0qthXq3jec-unsplash.jpg')} alt='hello' className='homepage-image'/>
      <div className='homepage-content-container'>
        <div className='homepage-content'>
          <span className='homepage-content-text-heading'>Excellence</span>
          <span className='homepage-content-text'>The pots are so nice wow. I love it so much</span>
        </div>
      
      </div>

    </div>
  )
}

export default HomePage