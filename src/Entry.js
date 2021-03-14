import React from "react";

function Entry(props) {
    return (
        <div>
            <div>{props.entry.name}</div>
            <div>{props.entry.phoneNumber}</div>
            <div>{props.entry.email}</div>
            <div>{props.entry.content}</div>
        </div>
    )
}

export default Entry;