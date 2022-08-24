import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'
import Adminnav from '../components/Adminnav';
import { useParams } from 'react-router-dom';
import Api from '../Api'
function Admintable() {

  const navigate = useNavigate();
  const [train, setTrain] = React.useState([]);

  const { id } = useParams();
  const [item, setitem] = useState(null);

  // update  api call
  const edititem = async () => {
    try {
      const { data } = await axios.put(`https://trainexpress.herokuapp.com/train/${id}`);
      setitem(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  // useEffect use refresh data
  useEffect(() => {
    edititem();
  });



  //get trains 
  const getTrain = async () => {
    try {
      const res = await axios.get("https://trainexpress.herokuapp.com/train/find");
      setTrain(res.data);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    getTrain();
  }, [])

  // delete trains

  const deletetrain = async ({ _id }) => {

    if (window.confirm(`Are You Sure Delete This Train ${_id}`, { _id })) {
      try {
        await axios.delete(`https://trainexpress.herokuapp.com/train/${_id}`);
        alert("Deleted Successfully");
        getTrain();
      } catch (error) {
        console.log(error.message);
      }
    }
  };



  return (
    <>
      <Adminnav />

      <div className='admin'>

        <table className="table">
          <thead>
            <tr>
              {/* <td>TrainId</td> */}
              <th>TrainNum</th>
              <th>TrainName</th>
              <th>From</th>
              <th>To</th>
              <th>A.Time</th>
              <th>D.Time</th>
              <th>Routes</th>
              <th>Actions</th>

            </tr>
          </thead>
          <tbody>
            {train.map((data) => {
              return (

                <tr>
                  {/* <td>{data._id}</td> */}
                  <td>{data.trainnumber}</td>
                  <td>{data.trainname}</td>
                  <td>{data.from}</td>
                  <td>{data.to}</td>
                  <td>{data.arrivaltime}</td>
                  <td>{data.depaturetime}</td>
                  <td>{data.routes}</td>
                  <td>

                    <button className='btn btn-primary btn-sm' onClick={() => navigate("/trainupdate/edit/" + data._id)}>
                    <iconify-icon icon="akar-icons:edit"></iconify-icon>
                    </button>

                    <button className='btn btn-danger btn-sm' onClick={() => deletetrain(data)}>
                      <iconify-icon icon="fluent:delete-20-filled">
                      </iconify-icon></button>
                  </td>

                </tr>

              );
            })}
          </tbody>

        </table>

      </div>


    </>
  )
}

export default Admintable