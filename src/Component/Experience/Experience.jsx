import React from 'react'
import html from './html.png'
import react from './react3logo.png'
const Experience = () => {
  return (
    <>
      <h1 className='MyS'>My Skills</h1>
    <section className='SectionE' id="skills">
      
        <div>
        <img src={html}/>
      <p>HTML</p>
      </div>
      <div>
      <img src='images/css-2logo.png'/>
      <p>CSS</p> 
      </div>
       <div>
      <img src='https://www.freepnglogos.com/uploads/javascript-png/js-logo-png-5.png'/>
      <p>Javascript</p>
      </div> 
      <div>
      <img src={react}/>
      <p>React</p> 
      </div>
    </section>
    <div className='Projects'>
        <p className='description'>I have worked on some projects. The websites are mobile responsive deploying the skills mentioned above. Click on the listed projects to view:</p>
        <div>
            <ul>
                <li><a href='https://rachkem01.github.io/Rachael-Portfolio/' target='_blank'>Portfolio Demo</a></li>
                <li><a href='https://rachkem01.github.io/Exquisite-Clothing-web/' target='_blank'>Exquisite Clothing</a></li>
                <li><a href='https://rachkem01.github.io/Palindrome-App/'  target='_blank'>Palindrome App</a></li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Experience