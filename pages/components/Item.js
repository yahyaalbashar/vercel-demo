import React from 'react'

function Item(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <h1>{props.owner}</h1>
        </div>
    )
}

export default Item
