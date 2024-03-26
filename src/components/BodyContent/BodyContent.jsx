import React from 'react';
import './BodyContent.css'
import Header from '../Header/Header';
import HeroSection from '../HeroSection/HeroSection';

const BodyContent = () => {
  return (
    <div className='bodycontent-container'>
      <Header/>
      <HeroSection/>
    </div>
  )
}

export default BodyContent
