import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'
import Usernav from '../components/Usernav';
import { useParams } from 'react-router-dom';

function Result() {
    const navigate = useNavigate();
    const [result, setresult] = React.useState([]);
// getting result
    const getTrain = async () => {
        try {
          const { data } = await axios.get(`https://trainexpress.herokuapp.com/train/find/`);
          setresult(data);
        } catch (error) {
          console.log(error.message);
        }
      };
      useEffect(() => {
       getTrain();
      });
    
  return (
    <div>Result</div>
  )
}

export default Result