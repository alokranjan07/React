import React from 'react'
import './About.css'
import Photo from '../assets/Photo.jpg'

const About = () => {
  return (
    <div className="about">
        <div ClassName="about-left">
            <img src={Photo} alt="img" />
        </div>
        <div className="about-left">
            <div className="about-para">
               <p> I am experienced web devloper created several project in react js ,javascript</p>
            </div>
            <h1></h1>
        </div>
      
    </div>
  )
}

export default About
