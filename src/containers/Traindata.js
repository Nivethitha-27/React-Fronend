import React from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Travel from './Travel';
import StripeCheckout from 'react-stripe-checkout'
import "./Traindata.css";
import Usernav from '../components/Usernav';
import Api from '../Api'



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

    // table 

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

            <Travel traindata={detail} Totalfare={Totalfare} />

            

        </>
    )
}

export default Traindata