import React from 'react'
import email from './email.png'
const Contact = () => {
  return (
    <div className='MyContact'>
     
     <div><p className='Feel'>Feel free to reach me anytime:</p></div>
    <div> <a href="mailto:agunlokokemi01@gmail.com"><img src={email} alt="email" className='Email'/></a></div>
    <div> <p>07033836590</p></div>
     
     
       
        </div>
  )
}

export default Contact