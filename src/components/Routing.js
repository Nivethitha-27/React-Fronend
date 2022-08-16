import React from 'react';
import { Routes, Route } from "react-router-dom";

import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
// import Signup from '../containers/Signup';
import Services from '../containers/Services';
import Traindata from '../containers/Traindata';
import Mybookings from '../containers/Mybookings';
import Payment from '../containers/Payment';
import Adminlogin from '../containers/Adminlogin';
import Admintable from '../containers/Admintable';
import Adminform from '../containers/Adminform';
import Admin from '../containers/Adminform';
import Adminuser from '../containers/Adminuser';
import Adminbook from '../containers/Adminbook';
import Usernav from './Usernav';
import Update from '../containers/Update';



function Routing() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route path="/services" element={<Services />} />
        <Route path="/traindata/:id" element={<Traindata />} />
        <Route path="/mybookings" element={<Mybookings />} />
        {/* <Route path="/travel" element={<Travel/>} /> */}
        <Route path="/payment" element={<Payment />} />
        <Route path="/usernav" element={<Usernav />} />
        <Route path="/adminlogin" element={<Adminlogin />} />
        <Route path="/admintable" element={<Admintable />} />
        <Route path="/adminuser" element={<Adminuser />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/adminform" element={<Adminform />} />
        <Route path="/adminbook" element={<Adminbook />} />

        <Route path="/update/edit/:id" element={<Update />} />


      </Routes>

    </div>
  )
}

export default Routing

