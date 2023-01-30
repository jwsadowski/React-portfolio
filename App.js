import React from 'react';
import Projects from './components/Projects';

const Projects = [
    {
        id: 1,
        name: "Movie Soundtrack Finder",
        repo: "https://github.com/megsra17/movie-soundtrack-finder.git",
        image: "https://github.com/megsra17/movie-soundtrack-finder/blob/main/Screen%20Shot%202022-10-18%20at%205.46.00%20PM.png",
        link: "https://github.com/megsra17/movie-soundtrack-finder/blob/main/index.html" 
    },
    {
        id: 2,
        name: "We Do",
        repo: "https://github.com/ddwk21/we-do.git",
        image: "https://github.com/ddwk21/we-do/blob/main/public/assets/homepage.JPG",
        link: "https://we-do-application.herokuapp.com/"
    },
    {
        id: 3,
        name: "Text Editor",
        repo: "https://github.com/jwsadowski/text-editor-challenge.git",
        image: "https://user-images.githubusercontent.com/111463494/214950568-620ec783-cf76-449d-827a-f55f72ab9bef.png",
        link: "https://calm-brook-66511.herokuapp.com/"
    }
];

function Projects()
{
    return <List projects={Projects} />;
}

export default Projects;
