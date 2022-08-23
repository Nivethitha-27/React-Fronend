// import files
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Api from '../Api'
import { useParams } from "react-router-dom";
import Usernav from "../components/Usernav";

// my orders page
export default function Bookings() {
  // authToken
  const accessToken = window.localStorage.getItem("accessToken");

  // navigate to page
  const navigate = useNavigate();

  // user details state management
  const [myOrders, setMyOrders] = useState([]);

  // Search orders
  const [query, setQuery] = useState("");

  // Initial Loading Page
  const [isLoading, setIsLoading] = useState(true);

  // get userById from authToken
  function parseJwt(token) {
    var base64Url = token.split(".")[1];
    var base64 = decodeURIComponent(
      atob(base64Url)
        .split("")
        .map((c) => {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    return JSON.parse(base64);
  }
  let a = parseJwt(accessToken);
  let userId = a._id;

  // get userById Orders
  const getUserById = async () => {
    try {
      const { data } = await axios.get(`https://trainexpress.herokuapp.com/passenger/userid/${userId}`);
      setMyOrders(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  // Call function useEffect
  useEffect(() => {
    getUserById();
  }, []);

  return (
    <>
      <Usernav />

      <div className="book">
        <table className="table">
          <thead >
            <tr>
              <th>Booking Id</th>
              <th>TrainName</th>
              <th>From</th>
              <th>D.Time</th>
              <th>To</th>
              <th>A.Time</th>
              <th>Routes</th>

              <th>Passenger</th>

              <th colSpan={3}>PassengerName</th>
              <th colSpan={3}>PassengerAge</th>


            </tr>
          </thead>
          {/* <div className="text-center">
              {" "}
              {isLoading && (
                <div className="text-center">
                  <img
                  className="text-center"
                    src="https://i.stack.imgur.com/hzk6C.gif"
                    alt=""
                  />
                </div>
              )}
            </div> */}
          <tbody>
            {myOrders.map((u, index) => {
              return (
                <tr key={index}>
                  <td>{u._id}</td>
                  <td>{u.traindata.trainname}</td>
                  <td>{u.traindata.from}</td>
                  <td>{u.traindata.arrivaltime}</td>
                  <td>{u.traindata.to}</td>
                  <td>{u.traindata.depaturetime}</td>
                  <td>{u.traindata.routes}</td>
                  <td>{u.passengerdata.name1}</td>
                  <td>{u.passengerdata.name2}</td>
                  <td>{u.passengerdata.name3}</td>
                  <td>{u.passengerdata.age1}</td>
                  <td>{u.passengerdata.age2}</td>
                  <td>{u.passengerdata.age3}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

    </>
  );
}

