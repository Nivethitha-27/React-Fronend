import axios from 'axios';
import React, { useEffect } from 'react'
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom"
import Adminnav from '../components/Adminnav';
import Api from '../Api'

function Adminuser() {
    const Aauth = window.localStorage.getItem('adminToken')
    const [user, setuser] = React.useState([]);

    const getuser = async () => {
        try {
            const { data } = await axios.get("https://trainexpress.herokuapp.com//user/find",
                {
                    headers: {
                        "Authorization": `Bearer ${Aauth}`
                    }
                }
            );
            setuser(data);
        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(() => {
        getuser();
    }, [])

    //delete user

    const deleteuser= async ({ _id }) => {

        if (window.confirm(`Are You Sure Delete This User ${_id}`, { _id })) {
          try {
            await axios.delete(`https://trainexpress.herokuapp.com//user/${_id}`,
              {
                headers: {
                  "Authorization": `Bearer ${Aauth}`
                }
              }
            );
            toast.success("UserDeleted", { autoClose: 2000 }, { position: toast.POSITION.TOP_RIGHT })
            getuser();
          } catch (error) {
            console.log(error.message);
          }
        }
      };

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
                            <th>Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        {user.map((data) => {
                            return (

                                <tr>
                                    <td>{data.username}</td>
                                    <td>{data.email}</td>
                                    <td>{data.mobile}</td>
                                    <td><button className='btn btn-danger btn-sm' onClick={() => deleteuser(data)}>
                                        <iconify-icon icon="fluent:delete-20-filled">
                                        </iconify-icon></button></td>
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