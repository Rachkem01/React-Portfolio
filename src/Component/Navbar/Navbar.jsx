import React from 'react'
import App from '../../App.css'

const Nav = () => {
  return (
    <div className='Nav'>
    <h1 className='PortfolioTitle'>My Portfolio</h1>
    <ul className='Navbarul'>
        <li className='Navbarli'><a href='#home'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#contact'>Contact</a></li>
    </ul>
</div>
  )
}

export default Nav