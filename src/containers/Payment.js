import React from 'react'
import { Link, useNavigate } from 'react-router-dom'



function Payment() {
  const navigate = useNavigate();
  return (
    <>
    <div className='payment' style={{textAlign:"center",marginTop:"2%"}}>
<img src='./images/17b21e2087e6b22a3bbc8fd3e137c918.gif'/>
    </div>
      {/* <h1>success</h1> */}
<h2 style={{fontFamily:"Timesnewroman", fontSize:"30px",textAlign:"center",marginTop:"2%" ,color:"darkred"}}>Happy Journey!!!</h2>
<h4 style={{fontFamily:"Timesnewroman" ,fontSize:"25px",textAlign:"center",marginTop:"1%" ,color:"deeppink"}}>Continue your Booking...</h4>
      <button  className="btn btn-success btn-lg btn-center "style ={{marginLeft:"47%", }}onClick={() => navigate("/services")}>Go To Home Page</button>
    </>
  )
}

export default Payment