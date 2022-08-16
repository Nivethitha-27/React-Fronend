import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


function Usernav() {
    //logout
    const navigate = useNavigate();
    const Logout = () => {
        window.localStorage.clear();
        navigate("/");
        alert("logged Out Successfully")
    };
    return (
        //usernavigation list
        <>
            <nav className="navbar navbar-expand-md">
                <div className="container-fluid">
                    <Link to="/services">
                    <img src="https://i.ibb.co/cYxZhwF/logo.png" width="300" height="100" alt=''/>

                    </Link>
                    <div className="container mt-5">
                        <ul className="nav justify-content-end">

                            <li className="nav-item">
                                <Link to="/mybookings" style={{ textDecoration: 'none' }}>MyBookings</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" style={{ textDecoration: 'none' }} onClick={Logout}>Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Usernav