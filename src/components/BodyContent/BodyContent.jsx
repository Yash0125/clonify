import React from 'react';
import './BodyContent.css'
import Header from '../Header/Header';
import HeroSection from '../HeroSection/HeroSection';
import AnalyticsCard from '../AnalyticsCard/AnalyticsCard';

const BodyContent = () => {
  return (
    <div className='bodycontent-container'>
      <Header/>
      <HeroSection/>
      <AnalyticsCard/>
    </div>
  )
}

export default BodyContent
