import React from 'react';
import { Routes, Route } from "react-router-dom";

import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Traindata from '../containers/Traindata';
import Bookings from '../containers/Bookings';
import Payment from '../containers/Payment';
import Admintable from '../containers/Admintable';
import Adminform from '../containers/Adminform';
import Admin from '../containers/Adminform';
import Adminuser from '../containers/Adminuser';
import Adminbook from '../containers/Adminbook';
import Usernav from './Usernav';
import Trainupdate from '../containers/Trainupdate';
import Adminlog from '../containers/Adminlog';
import Search from '../containers/Search';
import Userprofile from '../containers/Userprofile';




function Routing() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
        {/* <Route path="/result/send/:id" element={<Result />} /> */}
        <Route path="/traindata/:id" element={<Traindata />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/userprofile" element={<Userprofile />} />
        {/* <Route path="/travel" element={<Travel/>} /> */}
        <Route path="/payment" element={<Payment />} />
        <Route path="/usernav" element={<Usernav />} />
        <Route path="/adminlog" element={<Adminlog />} />
        <Route path="/admintable" element={<Admintable />} />
        <Route path="/adminuser" element={<Adminuser />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/adminform" element={<Adminform />} />
        <Route path="/adminbook" element={<Adminbook />} />
        <Route path="/trainupdate/edit/:id" element={<Trainupdate />} />


      </Routes>

    </div>
  )
}

export default Routing

