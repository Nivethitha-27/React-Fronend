import axios from 'axios';
import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";
import Adminlogo from '../components/Adminlogo';
const Newpassword = () => {
    const navigate = useNavigate()
    const [password, setPassword] = useState("")
    const { token } = useParams()
    console.log(token)
    const PostData = async () => {
        try {
            await axios.post("https://trainexpress.herokuapp.com/new-password", {
                password,
                token
            })
            toast.success("Password Changed", { autoClose: 2000 })
            navigate('/login')
        } catch (err) {
            console.log(err)
            toast.error("Invalid Password", { autoClose: 2000 })
        }
    }
    return (
        <>
            <Adminlogo />
            <div className='container'>
                <div className="mycard" style={{ textAlign: "center", marginTop: "5%", marginLeft: "35%" }}>
                    <div className="card" style={{ width: "500px" }}><br />
                        <h4 style={{ color: "deeppink", fontFamily: "monospace" }}>ChangeYourPassword</h4><br />
                        <div className="mb-4" >
                            <div className='row' style={{ marginLeft: "5%", border: "3px", marginRight: "3%" }}>
                                <input
                                    type="password"
                                    placeholder="Enter a New Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                /><br /><br />
                            </div>
                            <br />
                            <button className="btn btn-success btn-md"
                                onClick={() => PostData()}
                            >
                                Update password
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Newpassword