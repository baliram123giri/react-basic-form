import React, { useState } from 'react'
import { Heading } from './Heading'

const Counter = () => {
    let [count, setCount] = useState(0)
    //creating a function to increase
    function increament() {
        if (count >= 10 && count < 50) {
            setCount(count + 5)
        }
        else if (count >= 50) {
            setCount(count + 10)
        }
        else {
            setCount(count + 1)
        }

    }

    //creating a function to decrease
    function decreament() {
        if (count >= 10 && count < 50) {
            setCount(count - 5)
        } else if (count > 50) {
            setCount(count - 10)
        } else if (count > 0) {
            setCount(count - 1)
        }
    }

    // const props1 = {count:5, name:"baliram"}
    return (
        <div className='w-25  m-auto d-flex align-items-center justify-content-center' style={{ height: "100vh" }}>
            <div className='bg-light shadow-sm border p-5 text-center'>
                <Heading count={count} name="baliram" />
                <button onClick={increament} type="button" className="btn btn-outline-primary">+</button>
                <button onClick={decreament} type="button" className="btn btn-outline-success ms-1">-</button>
            </div>
        </div>
    )
}

export default Counter