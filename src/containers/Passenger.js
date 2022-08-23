import React from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Formik, Field, Form } from "formik";
import Travel from './Travel';
import StripeCheckout from 'react-stripe-checkout'
import Payment from './Payment';
import Usernav from '../components/Usernav';
import * as Yup from "yup";



export default function Passenger() {
    const navigate = useNavigate()


    const passengerSchema = Yup.object().shape({
        name1: Yup.string().required(),
        age1: Yup.string().required(),
        name2: Yup.string().required(),
        age2: Yup.string().required(),
        name3: Yup.string().required(),
        age3: Yup.string().required()
    });

    // Getting userid from token

    const accessToken = window.localStorage.getItem("accessToken")

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
    let a = parseJwt(accessToken);
    let userId = a._id;
    let email = a.email;
    // console.log(userId)
    // console.log(email)


    // use location

    const location = useLocation();

    const path = location.pathname.split("/")[2];

    const [detail, setdetail] = useState({});

    useEffect(() => {

        const getdetail = async () => {
            try {
                const res = await axios.get(`https://trainexpress.herokuapp.com/train/find/` + path);

                setdetail(res.data)

            } catch {
                console.error(500);
            }
        };
        getdetail()

    }, [path]);

    //price

    const [quantity, setQuantity] = useState(1);

    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > 1 && setQuantity(quantity - 1);
        } else {
            setQuantity(quantity + 1);
        }
    };
    const Totalfare = detail.price * quantity;

    // payment


    const Key = 'pk_test_51LUy9mSHMIw7a9qsG8WWRiLSuJ1d7dvfKKm1kYWdZjirGItPTFF0ssWFnh1VbdSYRS4XUxNifQrCXPK5C8yfdS2X00cftSxsTc'
    const [stripeToken, setStripeToken] = useState(null)

    const onToken = (token) => {

        setStripeToken(token);
        console.log(token);
        alert("Payment Successful")
        navigate("/payment");

    };

    // train details

    return (
        <>

            <Usernav />

            <div className='details'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>TrainName</th>
                            <th>TrainNum</th>
                            <th>From</th>
                            <th>To</th>
                            <th>A.Time</th>
                            <th>D.Time</th>
                            <th>Routes</th>
                            <th>Price</th>
                            <th>Passenger</th>
                            {/* <th>No.of passenger</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{detail.trainname}</td>
                            <td>{detail.trainnumber}</td>
                            <td>{detail.from}</td>
                            <td>{detail.to}</td>
                            <td>{detail.arrivaltime}</td>
                            <td>{detail.depaturetime}</td>
                            <td>{detail.routes}</td>
                            <td>{detail.price}</td>
                            <td><div className="bookingctr">
                                <button className="qty2" onClick={() => handleQuantity("inc")}>+</button>
                                <button className="qty3">{quantity}</button>
                                <button className="qty4" onClick={() => handleQuantity("dec")}>-</button>
                            </div></td>
                            {/* <td>
                               Rs. {Totalfare}
                            </td> */}
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* 
            <Travel traindata={detail} /> */}


            <div className="container">
                <div className='container' style={{ float: "right", width: "80%" }} >
                    <div className='row'>
                        <div className='col-sm-3'> </div>
                        <div className='col-sm-6'></div>
                        <div className='card'>

                            <div className='card-body'>

                                <div className='card-title'>

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

                                            const passengerdata = values
                                            const traindata = detail
                                            try {
                                                 await axios.post("http://localhost:5000/passenger", { passengerdata, userId,  traindata });
                                              
                                                // await axios.post(
                                                //     "http://localhost:5000/payment",
                                                //     {
                                                //         userId, tokenId: stripeToken.id,
                                                //         amount: { Totalfare }
                                                //     },
                                                // );

                                            } catch (error) {
                                                console.log(error.message)
                                            }
                                            // alert("Passenger Added Successfully");

                                        }
                                        }
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
                                                            <span className="text-danger text-start" style={{ fontSize: "14px" }}>
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
                                                            <span className="text-danger text-start" style={{ fontSize: "14px" }}>
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
                                                            <span className="text-danger text-start" style={{ fontSize: "14px" }}>
                                                                {errors.name3}
                                                            </span>
                                                        ) : null}
                                                        {/* age3*/}


                                                        {errors.age3 && touched.age3 ? (
                                                            <span className="text-danger text-start" style={{ fontSize: "14px" }}>
                                                                {errors.age3}
                                                            </span>
                                                        ) : null}

                                                    </div>
                                                </div>
                                                {/* submit button */}
                                                <button type="submit" className="btn btn-warning btn-sm">Upload</button>
                                                {/* <StripeCheckout
                                                    name="TrainExpress"
                                                    description={`Your Total Fare is Rs.${Totalfare}`}
                                                    amount={Totalfare * 100}
                                                    token={onToken}
                                                    currency="INR"
                                                    stripeKey={Key}
                                                >

                                                    <div className="travel" style={{ marginTop: "2%", marginRight: "20%" }}>
                                                        <button type="submit" className="btn btn-warning btn-sm">Upload</button>Rs.{Totalfare}


                                                    </div>
                                                </StripeCheckout> */}




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
    )
}