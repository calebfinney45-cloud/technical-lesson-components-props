import React from "react";
import Links from "./Links";

function About({bio, links, image}) {
    return (
        <div id="about">
            <h2>About Me</h2>
            <p>{bio}</p>
            <img src={image} alt="Profile" />
            <Links github={links.github} linkedin={links.linkedin} />
        </div>
    );
}

export default About;