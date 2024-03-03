import React from 'react'

export const Heading = ({ count, name }) => {

    return (
        <div>
            Counter
            <h1>{count}</h1>
            {name}
        </div>
    )
}
