import React from 'react';

export default function Card(props) {

    return (
        <div  className='container card '>
            <a href={props.url} target="_blank" rel="noopener noreferrer">
            <h2> {props.projectName} </h2>
            <img className='project-image' src={props.image} alt={props.image}></img>
            </a>
        </div>
    )
}