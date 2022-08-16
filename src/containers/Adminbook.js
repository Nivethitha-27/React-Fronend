import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom"
import Adminnav from '../components/Adminnav';
import Api from '../Api'

function Adminbook() {

  // getting booking details

  const [book, setbook] = React.useState([]);

  useEffect(() => {
    fetch("https://trainexpress.herokuapp.com/passenger/find")
      .then((res) => res.json())
      .then((data) => {
        setbook(data);

        console.log(data);
      });
  }, []);

  return (
    // Booking list table
    <>
      <Adminnav />

      <div className='container my-5'>

        <table className="table">
          <thead>
            <tr>
              <th>Booking Id</th>
              <th>TrainName</th>
              <th>From</th>
              <th>ArrivalTime</th>
              <th>To</th>
              <th>DepatureTime</th>
              <th>Price/Individual</th>
              <th>PassengerName</th>

            </tr>
          </thead>
          <tbody>
            {book.map((data) => {
              return (

                <tr>
                  <td>{data._id}</td>
                  <td>{data.traindata.trainname}</td>
                  <td>{data.traindata.from}</td>
                  <td>{data.traindata.arrivaltime}</td>
                  <td>{data.traindata.to}</td>
                  <td>{data.traindata.depaturetime}</td>
                  <td>{data.traindata.price}</td>
                  <td>{data.passengerdata.name1}</td>
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