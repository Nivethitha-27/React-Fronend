import React, { useEffect } from "react";
import axios from 'axios'
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom'
import { useState } from "react";
import Usernav from "../components/Usernav";

function Payment() {
  const navigate = useNavigate()
  return (
    <>
      <Usernav />
      <div className='payment' style={{ textAlign: "center" }}>
        <img src="https://i.ibb.co/qFPpcPR/17b21e2087e6b22a3bbc8fd3e137c918.gif" alt="" border="0" />
      </div>
      <h2 style={{ fontFamily: "Timesnewroman", fontSize: "25px", textAlign: "center", color: "darkred" }}>Happy Journey!!!</h2>
      <h3 style={{ fontFamily: "Timesnewroman", fontSize: "20px", textAlign: "center", color: "blue" }}>You can check your booking details in registered Email </h3>
      <button className="btn btn-success btn-sm btn-center " style={{ marginLeft: "46%", }} onClick={() => navigate("/bookings")}>Your Bookings details</button>
    </>
  )
}

export default Payment