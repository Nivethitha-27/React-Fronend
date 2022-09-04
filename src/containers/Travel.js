import React from "react";
import axios from "axios";
import StripeCheckout from 'react-stripe-checkout'
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
import userEvent from "@testing-library/user-event";


function Travel({ traindata, Totalfare }) {
    // authToken
    const Uauth = window.localStorage.getItem('accessToken');
    const email = window.localStorage.getItem("email");
    // navigate to page
    const navigate = useNavigate();
    //payment
    const Key = 'pk_test_51LUy9mSHMIw7a9qsG8WWRiLSuJ1d7dvfKKm1kYWdZjirGItPTFF0ssWFnh1VbdSYRS4XUxNifQrCXPK5C8yfdS2X00cftSxsTc'
    const [stripeToken, setStripeToken] = useState(null)
    const onToken = (token) => {
        setStripeToken(token);
        console.log(token);
        // alert("Payment Successful")
        navigate("/payment")
    };
    const makeRequest = async () => {
        try {
            const res = await axios.post(
                "https://trainexpress.herokuapp.com/payment",
                {
                    headers: [{
                        "Authorization": `Bearer ${Uauth}`
                    },
                    {
                        tokenId: stripeToken.id,
                        amount: { Totalfare },

                    }]
                }
            );
            // if (res === 200) {
            //     console.log("200");
            // } else {
            //     console.log("error");
            // }
            // console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        makeRequest();
        stripeToken && makeRequest()
    }, []);

    // form initialValues
    const [name1, setname1] = useState("");
    const [age1, setage1] = useState("");
    const [name2, setname2] = useState("");
    const [age2, setage2] = useState("");
    const [name3, setname3] = useState("");
    const [age3, setage3] = useState("");
    const [coach, setcoach] = useState("");
    const [berth, setberth] = useState("");

    // form submit
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formValues = {
            name1,
            age1,
            name2,
            age2,
            name3,
            age3,
            coach,
            berth,

        }
        const passengerdata = formValues
        try {
            // api call
            const { data } = await axios.post("https://trainexpress.herokuapp.com/passenger", { passengerdata, traindata, Totalfare, email },
                {
                    headers: {
                        "Authorization": `Bearer ${Uauth}`
                    }
                });
         // mail 
            const res = await axios.post("https://trainexpress.herokuapp.com/passenger/mail",
                {
                    email: data.email,
                    TrainName: data.traindata.trainname,
                    TrainNumber: data.traindata.trainnumber,
                    Depaturetime: data.traindata.depaturetime,
                    Arrivaltime: data.traindata.arrivaltime,
                    Date: data.traindata.date,
                    From: data.traindata.from,
                    To: data.traindata.to,
                    Coach: data.passengerdata.coach,
                    Berth: data.passengerdata.berth,
                     Totalfare: data.Totalfare,
                },
                {
                    headers: {
                        "Authorization": `Bearer ${Uauth}`
                    },

                }
            );
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <>
            <div className="container">
                <div className='container' style={{ float: "right", width: "65%", marginRight: "17%", textAlign: "center" }} >
                    <div className='row'>
                        <div className='col-sm-3'> </div>
                        <div className='col-sm-6'></div>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='card-title'>
                                    <b className="text-center" style={{ fontSize: "15px", fontFamily: 'monospace' }}>PassengerDetails</b>
                                    <form
                                        className="mt-4"
                                        onSubmit={handleSubmit}
                                    >
                                        <div className="mb-4" >
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <input
                                                        type="text"
                                                        name="name1"
                                                        placeholder="name1"
                                                        id="name1"
                                                        required
                                                        className="form-control"
                                                        onChange={(e) => setname1(e.target.value)}
                                                    />
                                                </div>

                                                {/*  description */}
                                                <div className="col-md-2">
                                                    <input
                                                        type="text"
                                                        name="age1"
                                                        className="form-control"
                                                        placeholder="age1"
                                                        id="age1"
                                                        required
                                                        onChange={(e) => setage1(e.target.value)}
                                                    />
                                                </div>
                                                <div class="col-md-2">

                                                    <select id="coach"
                                                        class="form-select"
                                                        onChange={(e) => setcoach(e.target.value)}>
                                                        <option selected>Coach</option>
                                                        <option>S1</option>
                                                        <option>S2</option>
                                                        <option>S3</option>
                                                        <option>S4</option>
                                                        <option>S5</option>
                                                    </select>

                                                </div>

                                                <div class="col-md-2">

                                                    <select id="berth"
                                                        class="form-select"
                                                        onChange={(e) => setberth(e.target.value)}>
                                                        <option selected>Berth</option>
                                                        <option>Upper</option>
                                                        <option>Lower</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        {/* name2 */}
                                        <div className="mb-4">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <input
                                                        type="text"
                                                        name="name2"
                                                        className="form-control"
                                                        placeholder="name2"
                                                        id="name2"

                                                        onChange={(e) => setname2(e.target.value)}
                                                    />

                                                </div>

                                                <div className="col-md-2">
                                                    <input
                                                        type="number"
                                                        name="age2"
                                                        placeholder="age2"
                                                        className="form-control"
                                                        id="age2"

                                                        onChange={(e) => setage2(e.target.value)}
                                                    />
                                                </div>
                                                <div class="col-md-2">

                                                    <select id="coach"
                                                        class="form-select"
                                                        onChange={(e) => setcoach(e.target.value)}>
                                                        <option selected>Coach</option>
                                                        <option>S1</option>
                                                        <option>S2</option>
                                                        <option>S3</option>
                                                        <option>S4</option>
                                                        <option>S5</option>
                                                    </select>
                                                </div>
                                                <div class="col-md-2">

                                                    <select id="berth"
                                                        class="form-select"
                                                        onChange={(e) => setberth(e.target.value)}>
                                                        <option selected>Berth</option>
                                                        <option>Upper</option>
                                                        <option>Lower</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        {/*  Rating */}
                                        <div className="mb-4">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <input
                                                        type="text"
                                                        name="name3"
                                                        placeholder="name3"
                                                        className="form-control"
                                                        id="name3"

                                                        onChange={(e) => setname3(e.target.value)}
                                                    />
                                                </div>
                                                {/*  offer */}
                                                <div className="col-md-2">
                                                    <input
                                                        type="number"
                                                        name="age3"
                                                        placeholder="age3"
                                                        className="form-control"
                                                        id="age3"

                                                        onChange={(e) => setage3(e.target.value)}
                                                    />
                                                </div>
                                                <div class="col-md-2">

                                                    <select id="inputState"
                                                        class="form-select"
                                                        onChange={(e) => setcoach(e.target.value)}>
                                                        <option selected>Coach</option>
                                                        <option>S1</option>
                                                        <option>S2</option>
                                                        <option>S3</option>
                                                        <option>S4</option>
                                                        <option>S5</option>
                                                    </select>
                                                </div>
                                                <div class="col-md-2">

                                                    <select id="berth"
                                                        class="form-select"
                                                        onChange={(e) => setberth(e.target.value)}>
                                                        <option selected>Berth</option>
                                                        <option>Upper</option>
                                                        <option>Lower</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="mb">
                                            <div className="row-md-6">
                                                <input
                                                    name="email"
                                                    value={email}
                                                    id="email"
                                                /></div>
                                        </div><br /> */}
                                        {/* submit Button */}
                                        <StripeCheckout
                                            name="TrainExpress"
                                            description={`Your Total Fare is Rs.${Totalfare}`}
                                            amount={Totalfare * 100}
                                            token={onToken}
                                            currency="INR"
                                            stripeKey={Key}
                                        >
                                            <button type="submit" className="btn btn-success btn-sm">Confirm Rs.{Totalfare}</button>
                                        </StripeCheckout>

                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Travel