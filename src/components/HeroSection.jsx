import React from 'react'
import styled from 'styled-components'
import './HeroSection.css'
import { NavLink } from 'react-router-dom'

const HeroSection = () => {
  return (
    <div className='hero-container'>
        <video src="./bg2.mp4" autoPlay loop muted/>
        <h1>Providing solutions to<br/> your innovations.</h1>
        <NavLink className='btn--outline btn--large' to='/services'>Explore Services</NavLink>
    </div>
  )
}


export default HeroSection
