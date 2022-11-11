import React from 'react';
import Card from './Card';
import seo from '../images/refactor.png';
import cocktail from '../images/cocktail.png';


export default function Projects () {
    return (
        <div id = "projects">
                <Card 
                    projectName = "Cocktail Curator"
                    image = {cocktail}
                    url = "https://the--cocktail--curator.herokuapp.com/"
                    />

                <Card 
                    projectName = "Tech Blog"
                    image = "refactor.png"
                    url = 'https://tech-blog-ru22.herokuapp.com/'
                    />

                <Card 
                    projectName = "Social Media API"
                    image = "refactor.png"
                    />

                <Card 
                    projectName = "Regex Tutorial"
                    image = "refactor.png"
                    />

                <Card 
                    projectName = "Employee Tracker DB"
                    image = "refactor.png"
                    />

                <Card 
                    projectName = "Team Profile Generator"
                    image = "refactor.png"
                    />

            </div>
    )
}