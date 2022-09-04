import React from "react";
import { useNavigate, Link } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import axios from "axios";
import Adminlogo from "../components/Adminlogo";


// Admin Login Page
export default function Adminlog() {
   
    // navigate to page
    const navigate = useNavigate();

    // Login Schema
    const loginSchema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().required("Please enter your password"),
    });

    return (
        <>
         <Adminlogo />
            <div className="container">
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                    }}
                    validationSchema={loginSchema}
                    onSubmit={async (values) => {
                        try {
                            // api call
                            const { data } = await axios.post("https://trainexpress.herokuapp.com/admin/login", values);
                            // set admin authToken for local storage
                            window.localStorage.setItem("adminToken",data);
                            // navigate to admin home page
                            navigate("/admintable");
                            // success message

                        } catch ({ response: { data } }) {
                            // errorMessage
                            alert("Wrong Credentials")
                        }
                    }}
                >
                    {/* Formik Form validation */}
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
                                                    <h5 style={{ fontFamily: "timesnewroman" }}>Admin Login</h5>
                                                    {/* email */}
                                                    <div className="mb-4">

                                                        <b>  <label className="form-label" style={{ fontSize: 15, fontFamily: "monospace" }} >Email</label></b>

                                                        {/* email */}
                                                        <div className="mb-4">
                                                            <Field
                                                                className="form-control"
                                                                type="email"
                                                                name="email"
                                                                placeholder="Email"
                                                            />
                                                        </div>
                                                        {errors.email && touched.email ? (
                                                            <span className="text-danger text-start">
                                                                *{errors.email}*
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

                                                    </div>
                                                    {errors.password && touched.password ? (
                                                        <span className="text-danger text-start">
                                                            *{errors.password}*
                                                        </span>
                                                    ) : null}
                                                    {/* button */}
                                                    <div className="">
                                                        <button
                                                            type="submit"
                                                            className="btn btn-success btn-md"
                                                        >
                                                            Login
                                                        </button>
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
    );
}
