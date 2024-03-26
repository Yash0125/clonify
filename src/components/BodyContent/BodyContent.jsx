import React from 'react';
import './BodyContent.css'
import Header from '../Header/Header';
import HeroSection from '../HeroSection/HeroSection';
import AnalyticsCard from '../AnalyticsCard/AnalyticsCard';
import Performance from '../Performance/Performance';

const BodyContent = () => {
  const data = [
    {
      "name": "Sun",
      "uv": 160,
      "pv": 96,
      "amt": 96
    },
    {
      "name": "Mon",
      "uv": 120,
      "pv": 55.2,
      "amt": 88
    },
    {
      "name": "Tue",
      "uv": 80,
      "pv": 250,
      "amt": 72
    },
    {
      "name": "Wed",
      "uv": 111.6,
      "pv": 150,
      "amt": 64
    },
    {
      "name": "Thu",
      "uv": 200,
      "pv": 100,
      "amt": 69.24
    },
    {
      "name": "Fri",
      "uv": 119.5,
      "pv": 200,
      "amt": 80
    },
    {
      "name": "Sat",
      "uv": 174.5,
      "pv": 100,
      "amt": 84
    }
  ];
  return (
    <div className='bodycontent-container'>
      <Header/>
      <HeroSection/>
      <AnalyticsCard/>
      <Performance data={data}/>
    </div>
  )
}

export default BodyContent
