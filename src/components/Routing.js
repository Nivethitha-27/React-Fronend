import React from 'react';
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from '../containers/Home';
import Login from '../containers/Login';
import Forgotpassword from '../containers/Forgotpassword';
import Newpassword from '../containers/Newpassword';
import Register from '../containers/Register';
import Search from '../containers/Search';
import Traindata from '../containers/Traindata';
import Bookings from '../containers/Bookings';
import Userprofile from '../containers/Userprofile';
import Payment from '../containers/Payment';
import Admintable from '../containers/Admintable';
import Adminform from '../containers/Adminform';
import Adminuser from '../containers/Adminuser';
import Adminbook from '../containers/Adminbook';
import Usernav from './Usernav';
import Trainupdate from '../containers/Trainupdate';
import Adminlog from '../containers/Adminlog';
import { Uprivateroute } from './Privateroute';
import { Aprivateroute } from './Privateroute';
// import Cancelticket from '../containers/Cancelticket';


function Routing() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/usernav" element={<Usernav />} />
        <Route path="/forgotpassword" element={<Forgotpassword />} exact />
        <Route path="/forgotpassword/:token" element={<Newpassword />} />
        <Route path="/search" element={<Uprivateroute><Search /></Uprivateroute>} />
        <Route path="/traindata/:id" element={<Uprivateroute><Traindata /></Uprivateroute>} />
        <Route path="/bookings" element={<Uprivateroute><Bookings /></Uprivateroute>} />
        {/* <Route path="/cancelticket" element={<Uprivateroute><Cancelticket /></Uprivateroute>} /> */}
        <Route path="/userprofile" element={<Uprivateroute><Userprofile /></Uprivateroute>} />
        {/* <Route path="/travel" element={<Travel/>} /> */}
        <Route path="/payment" element={<Uprivateroute><Payment /></Uprivateroute>} />
        <Route path="/adminlog" element={<Adminlog />} />
        <Route path="/admintable" element={<Aprivateroute><Admintable /></Aprivateroute>} />
        <Route path="/adminuser" element={<Aprivateroute><Adminuser /></Aprivateroute>} />
        <Route path="/adminform" element={<Aprivateroute><Adminform /></Aprivateroute>} />
        <Route path="/adminbook" element={<Aprivateroute><Adminbook /></Aprivateroute>} />
        <Route path="/trainupdate/edit/:id" element={<Aprivateroute><Trainupdate /></Aprivateroute>} />
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default Routing

