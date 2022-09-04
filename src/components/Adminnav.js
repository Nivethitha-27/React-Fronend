import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";

function Adminnav() {
 //logout
    const navigate = useNavigate();
    const Logout = () => {
        window.localStorage.clear();
        navigate("/");
        toast.success("logged Out Successfully",{autoClose:2000}, { position: toast.POSITION.TOP_RIGHT });
    };
    return (
      //navbar list
        <div>
    
            <nav className="navbar navbar-expand-md">
                <div className="container-fluid">
                    <Link to="/">
                    <img src="https://i.ibb.co/cYxZhwF/logo.png" width="300" height="100" alt='' />

                    </Link>

                    <div className="container mt-5">
                        <ul className="nav justify-content-end" >

                            <li className="nav-item">
                                <Link to="/admintable" style={{ textDecoration: 'none', color: "deeppink"  }}>TrainDetails</Link>
                                <br></br></li>
                                
                            <li className="nav-item">
                                <Link to="/adminbook" style={{ textDecoration: 'none', color: "deeppink"   }}>Booking</Link></li>
                              
                            <li className="nav-item">
                                <Link to="/adminuser" style={{ textDecoration: 'none', color: "deeppink"  }}>Userdetails</Link></li>
                                
                            <li className="nav-item">
                                <Link to="/adminform" style={{ textDecoration: 'none', color: "deeppink"  }} >AddingTrains</Link>
                            </li>
                            <li className="nav-item"> <Link to="/" style={{ textDecoration: 'none', color: "deeppink" }} onClick={Logout}>
                               
                                <iconify-icon icon="ri:logout-circle-line" style={{ color: "red", rotate: "90deg",marginTop:"5%" }}>
                                </iconify-icon></Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Adminnav