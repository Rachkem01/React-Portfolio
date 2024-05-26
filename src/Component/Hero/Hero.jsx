import React from 'react'

import image from './image.png'
const Hero = () => {
  return (
    <section className='SectionH'>
      <div>    
        <h1>Hi! I am Rachael</h1>
    <p>I am a Front-End developer earnestly seeking internship to grow in my career.</p></div>

    <img src={image} alt="portfolio" className='Portfolioimg'/>
 
</section>
)
  
}

export default Hero