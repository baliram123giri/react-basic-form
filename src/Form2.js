import React, { useState } from 'react'
import { MyButton } from './Todo/MyButton'



export const Form2 = () => {
    const [name, setName] = useState("Hjkjfg")
    const [description, setDescription] = useState("Helllo")


    //create a function to get the value of input change
    const nameHandler = (event) => {
        setName(event.target.value)
    }
    const descriptionHandler = (event) => {
        setDescription(event.target.value)
    }

    //create final data submit
    function onSubmit(e) {
        e.preventDefault()
        console.log({ name: name, description: description })

    }

    return (
        <>

            <form onSubmit={onSubmit} className='b_todo_form p-2 row align-items-center'>
                <div className='col-12  col-md-4 '>
                    <label htmlFor="name">Name</label>
                    <br />
                    <input required onChange={nameHandler} value={name} type="text" id='name' name='name' className='rounded-3 border-0 w-100' />
                </div>
                <div className='col-12 col-md-4'>
                    <label htmlFor="description">Description</label>
                    <br />
                    <input required onChange={descriptionHandler} value={description} type="text" id='description' name='description' className='rounded-3 border-0 w-100' />
                </div>
                <div className='col-12 col-md-3 ms-auto'>
                    <MyButton title={`Add Todos`} />
                </div>
            </form>

        </>
    )
}
