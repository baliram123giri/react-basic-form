import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link to={"/"} className='navbar-brand'>Home</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to={"/contact"} className="nav-link">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/about"} className="nav-link">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
