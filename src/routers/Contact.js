import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Contact = () => {
    const navigate = useNavigate()

    function goBackHandler() {
        navigate(-1)
    }
    return (
        <div>
            <h4>I am Contact</h4>
            <button onClick={goBackHandler}>Go Back</button>
        </div>
    )
}
