import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";
import Adminlogo from "../components/Adminlogo";
const Forgot = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const PostData = async () => {
        try {
            if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
                return
            }
            await axios.post('https://trainexpress.herokuapp.com//forgot', { email })
            toast("Check Your Mail", { autoClose: 2000 })
            navigate('/login')

        } catch (err) {
            console.log(err.message);
            toast.error("Invalid Email", { autoClose: 2000 });
        }
    }
    return (
        <>
            <Adminlogo />
            <div className='container my-5'>
                <div className='picture' style={{ float: "left", marginLeft: "5%" }}>
                    <img src='./images/forgot-password-concept-isolated-white_263070-194.jpg' height="500" alt='' />
                </div>

                <div className="card" style={{ width: "500px", height: "230px", float: "right", textAlign: "center", marginTop: "5%" }}>
                    <br />
                    <h4 style={{ color: "deeppink", fontFamily: "monospace" }}>ForgotPassword</h4><br />
                    <div className="mb-4" >
                        <div className='row' style={{ marginLeft: "5%", border: "3px", marginRight: "3%" }}>
                            <input
                                type="email"
                                value={email}
                                placeholder="Enter Your Registered Mail"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <br /><br />
                        </div><br />
                        <button className="btn btn-warning btn-md"
                            onClick={() => PostData()}
                        >ResetPassword
                        </button>
                    </div>

                </div>

            </div>
        </>
    )
}


export default Forgot