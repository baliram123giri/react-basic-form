import React from 'react'
import { useNavigate } from 'react-router-dom'

export const About = () => {
    const navigate = useNavigate()

    function goBackHandler() {
        navigate(-1)
    }
    return (
        <div>
            <h4>I am About</h4>
            <button onClick={goBackHandler}>Go Back</button>
        </div>
    )
}
