import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa6";
import { TbBeta } from "react-icons/tb";
export const Header = () => {
    const navigate = useNavigate()
    function redirectLogin() {
        navigate("/login")
    }
    return (
        <header className='bg-primary'>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link to={"/"} className='navbar-brand text-white'>LOGO</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <Link to={"/contact"} className="nav-link text-white">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/about"} className="nav-link text-white">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/tour"} className="nav-link text-white">Tour</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/features"} className="nav-link text-white">Features</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/pricing"} className="nav-link text-white">Pricing</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/todos"} className="nav-link text-white">Todos</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/instagram"} className="nav-link text-white"><FaInstagram /></Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/beta/OK/Good"} className="nav-link text-white"><TbBeta /></Link>
                            </li>
                        </ul>
                    </div>
                    <button onClick={redirectLogin} className='btn btn-outline-light'>Login</button>
                </div>
            </nav>
        </header>
    )
}
