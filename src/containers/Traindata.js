import React from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Travel from './Travel';
import StripeCheckout from 'react-stripe-checkout'
import Payment from './Payment';
import Usernav from '../components/Usernav';
import Api from '../../Api';



function Traindata() {
    const navigate = useNavigate()

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
    console.log(userId)
    console.log(email)


    // use location

    const location = useLocation();

    const path = location.pathname.split("/")[2];

    const [detail, setdetail] = useState({});

    useEffect(() => {

        const getdetail = async () => {
            try {
                const res = await axios.get(`${Api}/train/find/` + path);

                setdetail(res.data)

            } catch {
                console.error(500);
            }
        };
        getdetail()

    }, [path]);

    //price

    // const [fare, setfare] = useState(0);

    // const handleincrement = () => {
    //     if (fare < 10) {
    //         setfare(fare + 1)
    //     }
    // };
    // const handledecrement = () => {
    //     if (fare > 0) {
    //         setfare(fare - 1)
    //     }
    // }
    const [quantity, setQuantity] = useState(1);

    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > 1 && setQuantity(quantity - 1);
        } else {
            setQuantity(quantity + 1);
        }
    };
    //   const price = detail.price;
    //   console.log(price);
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

    const makeRequest = async () => {
        try {
            const res = await axios.post(
               `${Api}/payment`,

                {
                    tokenId: stripeToken.id,
                    amount: { Totalfare }
                });
            if (res === 200) {
                // alert("Payment Successful")
                // navigate("/payment");
                console.log("200");
            } else {
                console.log("error");
            }
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        makeRequest();
        // stripeToken && makeRequest()
    }, []);

    // table 

    return (
        <>

            <Usernav />

            <div className='details'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>TrainName</th>
                            <th>TrainNumber</th>
                            <th>From</th>
                            <th>To</th>
                            <th>ArrivalTime</th>
                            <th>DepatureTime</th>
                            <th>Routes</th>
                            <th>Price</th>
                            <th>No of passenger</th>
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

            <Travel traindata={detail} />

            <StripeCheckout
                name="TrainExpress"
                description={`Your Total Fare is Rs.${Totalfare}`}
                amount={Totalfare * 100}
                token={onToken}
                currency="INR"
                stripeKey={Key}
            >
                <div className="travel" style={{ marginTop: "3%", marginRight: "20%" }}>
                    <button className="btn btn-success btn-lg" style={{ float: "right", fontSize: "13px" }}>Rs.{Totalfare}
                        <p>Continue for payment</p>
                    </button>
                </div>
            </StripeCheckout>

        </>
    )
}

export default Traindata