import axios from 'axios';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom"
import Adminnav from '../components/Adminnav';
import Api from '../../Api';

function Adminuser() {

    const [user, setuser] = React.useState([]);

    useEffect(() => {
        fetch(`${Api}/user/find`)
            .then((res) => res.json())
            .then((data) => {
                setuser(data);

                console.log(data);
            });
    }, []);
    return (

        <>
            <Adminnav />

            <div className='container my-5' style={{ width: "700px" }}>

                <table className="table">
                    <thead>
                        <tr>
                            <th>UserName</th>
                            <th>Email</th>
                            <th>Mobile</th>

                        </tr>
                    </thead>
                    <tbody>
                        {user.map((data) => {
                            return (

                                <tr>
                                    <td>{data.username}</td>
                                    <td>{data.email}</td>
                                    <td>{data.mobile}</td>
                                </tr>

                            );
                        })}
                    </tbody>

                </table>

            </div>
            <div className='user'>
                <img src='./images/istockphoto-1208588832-612x612.jpg' />
            </div>
        </>
    )
}

export default Adminuser