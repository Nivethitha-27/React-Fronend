import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './Home.css'

function Home() {
    return (
        <>
            <Navbar />
            <div className='container'>
                <table className='table' style={{ width: "60%" }}>
                    <thead>
                        <tr>
                            <th>From</th>
                            <th>To</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Madurai</td>
                            <td>Chennai</td>
                        </tr>
                        <tr>
                            <td>Trichy</td>
                            <td>Kannyakumari</td>
                        </tr>
                        <tr>
                            <td>Rameshwaram</td>
                            <td>Kumbakonam</td>
                        </tr>
                    </tbody>
                </table><br></br><br></br>
                <h4>You Can Book Your tickets and Can get the Routes of the Train</h4><br></br>
                <Link to="/login" style={{textDecoration:"none"}}>
                    {/* <h5>Logged In for More Details,</h5>*/}
                    <button className='btn btn-warning btn-md'>Log In For More Details</button>
                    </Link> 
                <div className='home'>
                    <img src='./images/google-train.gif' />
                </div>
            </div>
        </>
    )
}

export default Home