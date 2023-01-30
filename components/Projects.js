import React from "react";

function Projects(props) {
    return (
        <ul className="list-group">
            {props.Projects.map(item => (
                <li className="list-group-item" key={item.id}>
                    {item.name}
                </li>
            ))}
        </ul>
    );
}        

export default Projects;