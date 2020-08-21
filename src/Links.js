import React from "react";

function Links(props) {
    return(
        <div>
        <p><strong>{props.site}</strong></p>
        <p>{props.url}</p>
        </div>
    )
}

export default Links