// import files
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Api from '../Api'
import { useParams } from "react-router-dom";
import Usernav from "../components/Usernav";

// my orders page
export default function MyBookings() {
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

      <div className="container">
        <table className="table">
          <thead >
            <tr>
              <th>Booking Id</th>
              <th>TrainName</th>
              <th>From</th>
              <th>DepatureTime</th>
              <th>To</th>
              <th>ArrivalTime</th>
              <th>Routes</th>

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
                  {/* <td className="d-flex gap-2 justify-content-center">
                    <button
                      className="btn btn-outline-white border-0"
                      onClick={() => navigate("/userOrdersInfo/" + u._id)}
                    >
                      <span
                        class="iconify text-info"
                        data-icon="bi:info-circle-fill"
                      ></span>
                    </button>
                  </td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

    </>
  );
}

