import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './Home.css'

function Home() {
    return (
        <>
            <Navbar />
            <div className='container'>  
                <div className='home'>
                    <img src='./images/google-train.gif' width="1300" height="750" alt=''/>
                </div>
                <div>
                <h4>You Can Book Your tickets and get the Routes of the Train</h4>
                <Link to="/login" style={{textDecoration:"none",marginLeft:"50%"}}>
                   <button className='btn btn-warning btn-md'>For More Details</button>
                    </Link> 
                    </div>
            </div>
        </>
    )
}

export default Home