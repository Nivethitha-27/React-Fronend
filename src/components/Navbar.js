import React from 'react';
import css from './Navbar.css';
import { Link, Routes } from 'react-router-dom';
// import Logo from './images/logo.png'



function Navbar() {

    return (
        <>

            <nav className="navbar navbar-expand-md">
                <div className="container-fluid">
                    {/* <Link to="/services"> */}
                        {/* <img src='./images/logo.png' width="300" height="100" alt='' />
                        <img src={Logo} /> */}
                        <Link to="/">
                            <img src="https://i.ibb.co/cYxZhwF/logo.png" width="300" height="100" alt='' />
                        </Link>

                    {/* </Link> */}
                    <div className="container mt-5">
                        <ul className="nav justify-content-end">

                            <li className="nav-item">
                                <Link to="/login" style={{ textDecoration: 'none' }}>Login</Link></li>

                            {/* <li className="nav-item">
                                <Link to="/signup" style={{ textDecoration: 'none' }}>Signup</Link></li> */}
                            <li className="nav-item">
                                <Link to="/adminlogin" style={{ textDecoration: 'none' }}>Admin</Link></li>

                        </ul>
                    </div>

                </div>
            </nav>



        </>





    )
};

export default Navbar;

