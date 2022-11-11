import React from 'react';
import profile from '../images/IMG_2965.jpg'

export default function About () {
    return (
        <div id = "about-me" className='row'>


     <div>
    <img className='profile' src={profile} alt="Profile"></img>
    </div>  

            <div className='description'>

            <p>My name is James Stapleton. I'm 28 years old and living in Asbury Park, NJ. I currently 
        work full time as a bartender while also studying computer science full time. With the customer service,
        creativity, adaptability and leadership skills that I've developed in the service industry, I am
        looking to dive head first into a new career as a developer. I am excited for all of the 
        opportunites and challenges in my path as I learn something new every day. Below you will find 
        an ever-evolving sample of my most recent and most exciting projects. 
    </p>
    <h3>Skills</h3>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>CLI</li>

        </ul>
        </div>
            </div>
    )
}