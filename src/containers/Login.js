import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './Login.css'
import axios from "axios";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import Adminlogo from "../components/Adminlogo";
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
                            const url = "https://trainexpress.herokuapp.com/login"
                            const { data } = await axios.post(url, values);

                            window.localStorage.setItem("accessToken", data);
                            window.localStorage.setItem("email", values.email);
                            navigate("/services");
                            alert("loggedin successfully");
                        } catch ({ response: { data } }) {
                            alert("Wrong credential!");
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
                                                    <h3 style={{ fontFamily: "timesnewroman" }}>Login</h3>
                                                    {/* email */}
                                                    <div className="mb-4">

                                                        <label className="form-label" style={{ fontSize: 15, fontFamily: "monospace"}} >Email</label>
                                                       
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
                                                        <label htmlfor="username" className="form-label" style={{ fontSize: 15, fontFamily: "monospace" }}>Password</label>
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
                                                    <div className=" mt-4" style={{ fontSize: 13, fontFamily: "timesnewroman" }}>
                                                        Don't have an account?
                                                        <Link to="/register">
                                                            Register
                                                        </Link>
                                                        <br></br>
                                                        <button type="submit" className='btn btn-success btn-lg'>Login</button>
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