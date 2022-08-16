import React from "react";
import axios from "axios";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";



function Travel({ traindata }) {
    const passengerSchema = Yup.object().shape({
        name1: Yup.string().required(),
        age1: Yup.string().required(),
        name2: Yup.string().required(),
        age2: Yup.string().required(),
        name3: Yup.string().required(),
        age3: Yup.string().required()
    });


    //user id

    const Token = window.localStorage.getItem("accessToken")

    function parseJwt(token) {
        var base64Url = token.split(".")[1];
        var base64 = decodeURIComponent(
            atob(base64Url)
                .split("")
                .map((c) => {
                    return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
                })
                .join("")
        );
        return JSON.parse(base64);
    }
    let a = parseJwt(Token);
    let userid = a._id;

    return (

        <div className="container">
            <div className='container' style={{ float: "right", width: "80%" }} >
                <div className='row'>
                    <div className='col-sm-3'> </div>
                    <div className='col-sm-6'></div>
                    <div className='card'>

                        <div className='card-body'>
                            <div className='card-title'>
                                {/* <div className="row justify-content-center mt-5 m-2">
                <div className="col-sm-4 col-md-6 col-lg-4 rounded-5 shadow-lg p-4 text-center border"> */}
                                <b className="text-center" style={{ fontSize: "15px", fontFamily: 'monospace' }}>PassengerDetails</b>

                                {/* Formik validation */}
                                <Formik
                                    initialValues={{
                                        name1: "",
                                        age1: "",
                                        name2: "",
                                        age2: "",
                                        name3: "",
                                        age3: ""
                                    }}
                                    validationSchema={passengerSchema}
                                    onSubmit={async (values) => {
                                        // api call
                                        const passengerdata = values

                                        try {

                                            const { data } = await axios.post("https://trainexpress.herokuapp.com/passenger", { passengerdata, traindata, userid });
                                            console.log(data);
                                            alert("Passenger Added Successfully");

                                        } catch (error) {
                                            console.log(error.message);
                                        }
                                    }}
                                >
                                    {({ errors, touched }) => (
                                        <Form className="mt-4">

                                            <div className="mb-4">
                                                {/* name 1*/}
                                                <div className="row">
                                                    <div className="col">
                                                        <Field
                                                            style={{ fontSize: "14px" }}
                                                            className="form-control"
                                                            name="name1"
                                                            placeholder="1stPassengerName"
                                                        />

                                                    </div>
                                                    {/* age 1*/}
                                                    <div className="col">

                                                        <Field
                                                            style={{ fontSize: "14px" }}
                                                            className="form-control"
                                                            name="age1"
                                                            placeholder="1stpassengerAge"
                                                        />
                                                    </div>
                                                </div>


                                                <div className="d-flex justify-content-between">
                                                    {errors.name1 && touched.name1 ? (
                                                        <span className="text-danger text-start">
                                                            {errors.name1}
                                                        </span>
                                                    ) : null}

                                                    {errors.age1 && touched.age1 ? (
                                                        <span className="text-danger text-start" style={{ fontSize: "13px" }}>
                                                            {errors.age1}
                                                        </span>
                                                    ) : null}

                                                </div>
                                            </div>
                                            <div className="mb-4 ">
                                                <div className="row">
                                                    <div className="col">
                                                        {/* name 2*/}

                                                        <Field
                                                            style={{ fontSize: "14px" }}
                                                            className="form-control"
                                                            name="name2"
                                                            placeholder="2ndPassengerName"
                                                        />
                                                    </div>

                                                    {/* age2*/}
                                                    <div className="col">
                                                        <Field
                                                            style={{ fontSize: "14px" }}
                                                            className="form-control"
                                                            name="age2"
                                                            placeholder="2ndPassengerAge"
                                                        />
                                                    </div>

                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    {errors.name2 && touched.name2 ? (
                                                        <span className="text-danger text-start">
                                                            {errors.name2}
                                                        </span>
                                                    ) : null}
                                                    {errors.age2 && touched.age2 ? (
                                                        <span className="text-danger text-start" style={{ fontSize: "13px" }}>
                                                            {errors.age2}
                                                        </span>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className="mb-4">
                                                <div className="row">
                                                    <div className="col">
                                                        {/* name3*/}
                                                        <Field
                                                            style={{ fontSize: "14px" }}
                                                            className="form-control"
                                                            name="name3"
                                                            placeholder="3rdPassengerName"
                                                        />
                                                    </div>

                                                    <div className="col">
                                                        <Field
                                                            style={{ fontSize: "14px" }}
                                                            className="form-control"
                                                            name="age3"
                                                            placeholder="3rdPassengerAge"
                                                        />
                                                    </div>

                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    {errors.name3 && touched.name3 ? (
                                                        <span className="text-danger text-start" style={{ fontSize: "13px" }}>
                                                            {errors.name3}
                                                        </span>
                                                    ) : null}
                                                    {/* age3*/}


                                                    {errors.age3 && touched.age3 ? (
                                                        <span className="text-danger text-start" style={{ fontSize: "13px" }}>
                                                            {errors.age3}
                                                        </span>
                                                    ) : null}

                                                </div>
                                            </div>
                                            {/* submit button */}

                                            <button type="submit" className="btn btn-primary btn-sm">Submit</button>


                                        </Form>
                                    )}
                                </Formik>

                            </div>
                        </div>


                    </div>
                </div>


            </div>
        </div>
    )
}
export default Travel