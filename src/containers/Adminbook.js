import React, { useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom"
import Adminnav from '../components/Adminnav';
import Api from '../Api'

function Adminbook() {

  const Aauth = window.localStorage.getItem('adminToken')

  // getting booking details

  const [book, setbook] = React.useState([]);
  const getuser = async () => {
    try {
      const { data } = await axios.get("https://trainexpress.herokuapp.com/passenger/find",
        {
          headers: {
            "Authorization": `Bearer ${Aauth}`
          }
        }
      );
      setbook(data);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    getuser();
  }, [])

  return (
    // Booking list table
    <>
      <Adminnav />

      <div className='book'>

        <table className="table">
          <thead>
            <tr>
              <th>Username</th>
              <th>EmailId</th>
              <th>Booking Id</th>
              <th>TrainName</th>
              <th>From</th>
              <th>ArrivalTime</th>
              <th>To</th>
              <th>DepatureTime</th>
              <th>TotalPrice</th>
              <th colSpan={3}>PassengerName</th>
              <th colSpan={3}>PassengerAge</th>

            </tr>
          </thead>
          <tbody>
            {book.map((data) => {
              return (

                <tr>
                  <td>{data.username}</td>
                  <td>{data.email}</td>
                  <td>{data._id}</td>
                  <td>{data.traindata.trainname}</td>
                  <td>{data.traindata.from}</td>
                  <td>{data.traindata.arrivaltime}</td>
                  <td>{data.traindata.to}</td>
                  <td>{data.traindata.depaturetime}</td>
                  <td>{data.Totalfare}</td>
                  <td>{data.passengerdata.name1}</td>
                  <td>{data.passengerdata.name2}</td>
                  <td>{data.passengerdata.name3}</td>
                  <td>{data.passengerdata.age2}</td>
                  <td>{data.passengerdata.age3}</td>
                  <td>{data.passengerdata.age3}</td>
                </tr>

              );
            })}
          </tbody>

        </table>

      </div>
    </>
  )
}

export default Adminbook