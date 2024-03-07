import React, { useEffect, useState } from 'react'

export const Users = () => {
    let [mydata, setMyData] = useState([]);

    function userList() {
        fetch("https://jsonplaceholder.typicode.com/users").then((value) => value.json()).then(((data) => {
            setMyData(data)
        }))
    }

    useEffect(() => {
        userList()
    }, [])

    return (
        <ul className="list-group w-50 mx-auto my-5">
            {mydata.map((ele) => {
                return <li key={ele.id} className="list-group-item">{ele.name},  <span className='text-danger'>{ele.website}</span></li>
            })}
        </ul>
    )
}
