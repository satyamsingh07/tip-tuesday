import React from "react"

//Destructuring without using prop word at all!

const EmojifyComponent = ({ name, emoji }) => {

    return (
        <h1>
            {emoji} {name} {emoji}
        </h1>
    )
}
export default EmojifyComponent;