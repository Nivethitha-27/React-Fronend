// import files
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import Api from '../Api'
import Adminlogo from "../components/Adminlogo";


// SignUp Component
export default function SignUpPage() {
    // navigate function
    const navigate = useNavigate();

    // Validation Schema
    const SignupSchema = Yup.object().shape({
        username: Yup.string().required(),
        email: Yup.string().email().required(),
        mobile: Yup.number().required().positive().integer(),
        password: Yup.string().min(4).max(10).required("Please enter your password"),


    });

    return (
        <>
            <Adminlogo />
            <div className="container">

                <div className='row'>
                    <div className='col-sm-3'> </div>
                    <div className='col-sm-6'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='card-title'>
                                    <h5 style={{ color: "black", fontFamily: "timesnewroman" }}>Signup</h5>
                                    {/* Formik validation */}
                                    <Formik
                                        initialValues={{
                                            username: "",
                                            email: "",
                                            mobile: "",
                                            password: "",
                                        }}
                                        validationSchema={SignupSchema}
                                        onSubmit={async (values) => {
                                            try {
                                                const url = "https://trainexpress-node-akod.vercel.app/register";
                                                const { data } = await axios.post(url, values);
                                                navigate("/login");
                                                toast.success("Registered Successfully", { autoClose: 2000 }, { position: toast.POSITION.TOP_CENTER });
                                            } catch ({ response: { data } }) {
                                                toast.error("Wrong Credentials", { autoClose: 2000 })
                                            }
                                        }}
                                    >
                                        {({ errors, touched }) => (
                                            <Form className="mt-4">

                                                {/* Full name */}
                                                <div className="mb-4">

                                                    <b> <label className="form-label" style={{ fontSize: 15, fontFamily: "monospace" }}>UserName</label></b>
                                                    <Field
                                                        style={{ fontSize: "14px" }}
                                                        type="text"
                                                        name="username"
                                                        placeholder="User Name"
                                                        className="form-control"
                                                    />
                                                </div>
                                                {errors.username && touched.username ? (
                                                    <span className="text-danger text-start" style={{ fontSize: "13px" }}>
                                                        *{errors.username}*
                                                    </span>
                                                ) : null}

                                                {/* Email */}
                                                <div className="mb-4">

                                                    <b>  <label className="form-label" style={{ fontSize: 15, fontFamily: "monospace" }}>Email</label></b>
                                                    <Field
                                                        style={{ fontSize: "14px" }}
                                                        type="email"
                                                        name="email"
                                                        placeholder="Email"
                                                        className="form-control"
                                                    />
                                                </div>
                                                {errors.email && touched.email ? (
                                                    <span className="text-danger text-start" style={{ fontSize: "13px" }}>
                                                        *{errors.email}*
                                                    </span>
                                                ) : null}

                                                {/* Contact number */}
                                                <div className="mb-4">

                                                    <b>  <label className="form-label" style={{ fontSize: 15, fontFamily: "monospace" }}>MobileNumber</label></b>
                                                    <Field
                                                        style={{ fontSize: "14px" }}
                                                        type="number"
                                                        name="mobile"
                                                        className="form-control"
                                                        placeholder="Mobile Number"
                                                    />
                                                </div>
                                                {errors.mobile && touched.mobile ? (
                                                    <span className="text-danger text-start" style={{ fontSize: "13px" }}>
                                                        *{errors.mobile}*
                                                    </span>
                                                ) : null}

                                                {/* Password */}
                                                <div className="mb-4">

                                                    <b>   <label className="form-label" style={{ fontSize: 15, fontFamily: "monospace" }}>Password</label></b>
                                                    <Field
                                                        style={{ fontSize: "14px" }}
                                                        type="password"
                                                        name="password"
                                                        placeholder="Password"
                                                        className="form-control"
                                                    />
                                                </div>
                                                {errors.password && touched.password ? (
                                                    <span className="text-danger text-start" style={{ fontSize: "13px" }}>
                                                        *{errors.password}*
                                                    </span>
                                                ) : null}

                                                <p style={{ fontSize: 15, fontFamily: "timesnewroman" }}>
                                                    Already a User?{" "}
                                                    <Link to="/login" >
                                                        Login
                                                    </Link>{" "}
                                                </p>
                                                {/* submit Button */}
                                                <button type="submit" className="btn btn-primary btn-md">Register</button>
                                            </Form>
                                        )}
                                    </Formik>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}