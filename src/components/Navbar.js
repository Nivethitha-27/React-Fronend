import React from 'react';
import css from './Navbar.css';
import { Link, Routes } from 'react-router-dom';
// import Logo from './images/logo.png'



function Navbar() {

    return (
        <>

            <nav className="navbar navbar-expand-md " style={{ backgroundcolor: "rgb(238, 168, 244)" }}>
                <div className="container-fluid">
                    <Link to="/">
                        <img src="https://i.ibb.co/cYxZhwF/logo.png" width="300" height="100" alt='' />
                    </Link>

                    {/* </Link> */}
                    <div className="container mt-5">
                        <ul className="nav justify-content-end">

                            <li className="nav-item">
                                <Link to="/login" style={{ textDecoration: 'none', color: "blue" }}>Login</Link></li>
                            <li className="nav-item">
                                <Link to="/adminlog" style={{ textDecoration: 'none', color: "blue" }}>Admin</Link></li>

                        </ul>
                    </div>

                </div>
            </nav>



        </>





    )
};

export default Navbar;

