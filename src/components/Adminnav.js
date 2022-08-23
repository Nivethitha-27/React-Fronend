import React from 'react'
import { Link } from 'react-router-dom'

function Adminnav() {
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
                        </ul>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Adminnav