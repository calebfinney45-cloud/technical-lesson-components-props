import React from "react";

function Links({github, linkedin}) {
    return (
        <div>
            <a href={github}>Github</a>
            <a href={linkedin}>LinkedIn</a>
        </div>
    );
}

export default Links;   