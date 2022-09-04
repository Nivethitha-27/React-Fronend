import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './Login.css'
import axios from "axios";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import Adminlogo from "../components/Adminlogo";
import { toast } from "react-toastify";
import Api from '../Api'
// Login Schema

function Log() {

    const navigate = useNavigate()
    const loginSchema = Yup.object().shape({
        email: Yup.string().email().required("Invalid email"),
        password: Yup.string().required("Please enter valid password"),
    });
    return (
        <>
            <Adminlogo />
            <div className="container" >


                {/* Formik validation */}
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                    }}
                    validationSchema={loginSchema}
                    onSubmit={async (values) => {

                        try {
                            const url = "https://trainexpress.herokuapp.com//login"
                            const { data } = await axios.post(url, values);

                            window.localStorage.setItem("accessToken", data);
                            window.localStorage.setItem("email", values.email);

                            toast.success("Loggedin successfully",{autoClose:2000}, { position: toast.POSITION.TOP_RIGHT });
                            navigate("/search");
                        } catch ({ response: { data } }) {
                            toast.error("Wrong Credentials", { position: toast.POSITION.TOP_RIGHT });
                        }
                    }}
                >
                    {({ errors, touched }) => (

                        <Form>
                            <div className='container my-5'>
                                <div className='row'>
                                    <div className='col-sm-3'>
                                    </div>
                                    <div className='col-sm-6'>
                                        <div className='card'>
                                            <div className='card-body'>
                                                <div className='card-title'></div>
                                                <div className="container-fluid h-custom">
                                                    <h5 style={{ fontFamily: "timesnewroman" }}>Login</h5>
                                                    {/* email */}
                                                    <div className="mb-4">

                                                        <b>  <label className="form-label" style={{ fontSize: 15, fontFamily: "monospace" }} >Email</label></b>

                                                        <Field
                                                            style={{ fontSize: "14px" }}
                                                            className="form-control"
                                                            type="email"
                                                            name="email"
                                                            placeholder="Email"

                                                        />

                                                    </div>
                                                    {errors.email && touched.email ? (
                                                        <span className="text-danger text-start" style={{ fontSize: "13px" }}>
                                                            {errors.email}
                                                        </span>
                                                    ) : null}
                                                    {/* Password */}
                                                    <div className="mb-4">
                                                        <b> <label htmlfor="username" className="form-label" style={{ fontSize: 15, fontFamily: "monospace" }}>Password</label></b>
                                                        <Field
                                                            style={{ fontSize: "14px" }}
                                                            className="form-control"
                                                            type="password"
                                                            name="password"
                                                            placeholder="Password"
                                                        />
                                                    </div>
                                                    {errors.password && touched.password ? (
                                                        <span className="text-danger text-start" style={{ fontSize: "13px" }}>
                                                            {errors.password}
                                                        </span>
                                                    ) : null}
                                                    {/* submit button */}
                                                    <div className=" mt-4" style={{ fontSize: 15, fontFamily: "timesnewroman" }}>
                                                        Don't have an account?
                                                        <Link to="/register">
                                                            Register
                                                        </Link>
                                                        <div className="forgot" style={{float:"right"}}>
                                                       <Link to="/forgotpassword">ForgotPassword</Link></div> 
                                                        <br/><br/>
                                                        <button type="submit" className='btn btn-success btn-md'>Login</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    )}

                </Formik>
            </div>

        </>


    )
}
export default Log