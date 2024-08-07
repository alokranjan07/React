import React from 'react'
import './Person.css'
import Photo from '../assets/Photo.jpg'
const Person = () => {
  return (
    <div className="person">
        <img src={Photo} alt="alok" className="photo"/>

        <h1 className="h11"> I am Alok ranjan,full-stack developer</h1>
        <p>
            I am front end developer from delhi with experience in making sevral projects

        </p>
        <div className="action">
        <div className="connect">Connect me</div>
        <div className="resume">Resume</div>
        </div>
      
    </div>
  )
}

export default Person
