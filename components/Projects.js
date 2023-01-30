import React from "react";

function Projects(props) {
    return (
        <ul className="project-group">
            {props.Projects.map(item => (
                <li className="project-group-item" key={item.id}>
                    {item.name}
                </li>
            ))}
        </ul>
    );
}        

export default Projects;