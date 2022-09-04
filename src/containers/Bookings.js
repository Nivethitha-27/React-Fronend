// import files
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Api from '../Api'
import Usernav from "../components/Usernav";

// my orders page
export default function Bookings() {
  // authToken
  const Uauth = window.localStorage.getItem('accessToken')
  const navigate = useNavigate();
  const { id } = useParams();
  // user details state management
  const [mybookings, setMybookings] = useState([]);
  // get userById bookings
  const getUserById = async () => {
    try {
      const { data } = await axios.get(`https://trainexpress.herokuapp.com/passenger/userid/user`,
        {
          headers: {
            "Authorization": `Bearer ${Uauth}`
          }
        }
      );
      setMybookings(data);
      console.log(data);

    } catch (error) {
      console.log(error.message);
    }
  };

  // Call function useEffect
  useEffect(() => {
    getUserById();
  }, []);

  //cancel ticket

  const cancelticket = async ({ _id }) => {

    if (window.confirm(`Are You Sure to Cancel Ticket ${_id}`, { _id })) {
      try {
        await axios.delete(`https://trainexpress.herokuapp.com/passenger/${_id}`,
          {
            headers: {
              "Authorization": `Bearer ${Uauth}`
            }
          }
        );
        navigate("/bookings")
        toast.success("TicketCancelled", { autoClose: 2000 }, { position: toast.POSITION.TOP_RIGHT })
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    <>
      <Usernav />

      <div className="book">
        <table className="table">
          <thead >
            <tr>
              <th>Username</th>
              <th>TrainName</th>
              <th>From</th>
              <th>D.Time</th>
              <th>To</th>
              <th>A.Time</th>
              <th>Routes</th>
              <th>Totalfare</th>
              <th colSpan={3}>PassengerName</th>
              <th colSpan={3}>PassengerAge</th>
              <th>Status</th>
              <th>CancelTicket</th>

            </tr>
          </thead>
          <tbody>
            {mybookings.map((u, index) => {
              return (
                <tr key={index}>
                  <td>{u.username}</td>
                  <td>{u.traindata.trainname}</td>
                  <td>{u.traindata.from}</td>
                  <td>{u.traindata.arrivaltime}</td>
                  <td>{u.traindata.to}</td>
                  <td>{u.traindata.depaturetime}</td>
                  <td>{u.traindata.routes}</td>
                  <td>{u.Totalfare}</td>
                  <td>{u.passengerdata.name1}</td>
                  <td>{u.passengerdata.name2}</td>
                  <td>{u.passengerdata.name3}</td>
                  <td>{u.passengerdata.age1}</td>
                  <td>{u.passengerdata.age2}</td>
                  <td>{u.passengerdata.age3}</td>
                  <td>{u.traindata.status}</td>
                  <td><button className='btn btn-danger btn-sm' style={{ textAlign: "center" }} onClick={() => cancelticket(u)}>
                    <iconify-icon icon="ic:sharp-cancel"></iconify-icon>
                  </button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

    </>
  );
}

