import React from 'react'

import HeroText from "./heroText/HeroText";
import HeroButtons from "./heroButtons/HeroButtons";

import './heroSection.css'

const HeroSection = () => {
  return (
    <div className="hero--container">
      <HeroText/>
      <HeroButtons/>
    </div>
  )
}

export default HeroSection
