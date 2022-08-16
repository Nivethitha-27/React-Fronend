import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import "./Services.css"
import { useNavigate } from "react-router-dom"
import Api from '../Api'
import Usernav from '../components/Usernav';

function Services() {
  const navigate = useNavigate();
 
 
const  [api, setapi] = React.useState([]); 

  useEffect(() => {
    fetch("https://trainexpress.herokuapp.com/train/find")
      .then((res) => res.json())
      .then((data) => {
        setapi(data);
        
        console.log(data);
      });
  }, []);

  return (
    <>
 <Usernav/>
    <div className='container my-5' style={{width:"700px"}}>
      
      <table className="table">
        <thead>
          <tr>
            <th>TrainNumber</th>
            <th>From</th>
            <th>To</th>
            <th>Details</th>

          </tr>
        </thead>
        <tbody>
          {api.map((data) => {
            return (
             
                <tr>
                 <td>{data.trainnumber}</td>
                  <td>{data.from}</td>
                  <td>{data.to}</td>
                  <td><Link to={`/traindata/${data._id}`}><button className='btn btn-info btn-sm'>Clickhere</button></Link></td>
                </tr>
             
            );
          })}
        </tbody>

      </table>

    </div>
    <div className='service'>
        <img src='./images/bca3706c0a3ae1419d20fe155562418d_original.png'/>
      </div>
    </>
  )

}



export default Services