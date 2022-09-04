import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";
import "./Navbar.css"

function Usernav() {

    const email = window.localStorage.getItem("email");

    //logout
    const navigate = useNavigate();
    const Logout = () => {
        window.localStorage.clear();
        navigate("/");
        toast.success("logged Out Successfully",{autoClose:2000}, { position: toast.POSITION.TOP_RIGHT });
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
                                    {email}

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