import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Navbar.css"

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
                    <Link to="/search">
                        <img src="https://i.ibb.co/cYxZhwF/logo.png" width="300" height="100" alt='' />

                    </Link>
                    <div className="container mt-5">
                        <ul className="nav justify-content-end">
                            <li className="nav-item"  >
                                <Link to="/userprofile" style={{ textDecoration: 'none', color: "deeppink" }}>
                                    Profile
                                    {/* <iconify-icon icon="healthicons:ui-user-profile" style={{color: "red"}}></iconify-icon> */}
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/bookings" style={{ textDecoration: 'none', color: "deeppink" }}>
                                    Bookings
                                </Link>
                            </li>
                            <li className="nav-item"> <Link to="/" style={{ textDecoration: 'none', color: "deeppink" }} onClick={Logout}>
                                Logout
                                <iconify-icon icon="ri:logout-circle-line" style={{ color: "red", rotate: "90deg", }}>
                                </iconify-icon></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Usernav