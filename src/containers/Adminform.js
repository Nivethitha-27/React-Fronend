import React from 'react'

import axios from "axios";
import Adminnav from '../components/Adminnav';
import Api from '../../Api';
function Admin() {

    // form values
    const [user, setUser] = React.useState({
        trainname: "",
        trainnumber: "",
        from: "",
        to: "",
        time: "",
        routes: "",

    });

    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value });
    };
    // posting train details

    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            const url = `${Api}/train`;
            const res = await axios.post(url, user);
            console.log(res);
            localStorage.setItem("auth", JSON.stringify(res.user));

            alert("TrainDetails Added Sucessfully")

            // history.push("/login");
        } catch { }
    };



    return (
        // train details form
        <>
            <Adminnav />
            <div className='container my-5'>
                <div className='row'>
                    <div className='col-sm-3'> </div>
                    <div className='col-sm-6'>
                        <div className='card'>

                            <div className='card-body'>
                                <div className='card-title'>
                                    <h2 style={{ color: "black", fontFamily: "timesnewroman" }}>TrainDetails</h2>

                                    <form className="mt-4" onSubmit={handlesubmit} autoComplete="off">
                                        <div className="mb-4">
                                            <div className='row'>
                                                <div className='col'>
                                                    <label htmlfor="trainnumber" className="form-label" style={{ fontSize: 15, fontFamily: "monospace" }}>TrainNumber</label>
                                                    <input type="number"
                                                        style={{ fontSize: 14 }}
                                                        name="trainnumber"
                                                        className="form-control"
                                                        id="trainnumber"
                                                        placeholder="TrainNumber"
                                                        onChange={handleChange}
                                                        value={user.trainnumber}
                                                        required
                                                    />
                                                </div>


                                                <div className='col'>
                                                    <label htmlfor="trainname" className="form-label" style={{ fontSize: 15, fontFamily: "monospace" }}>TrainName</label>
                                                    <input type="text"
                                                        style={{ fontSize: 14 }}
                                                        name="trainname"
                                                        className="form-control"
                                                        id="trainname"
                                                        placeholder="TrainName"
                                                        onChange={handleChange}
                                                        value={user.trainname}
                                                        required
                                                    />
                                                </div>

                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <div className='row'>
                                                <div className='col'>
                                                    <label htmlfor="from" className="form-label" style={{ fontSize: 15, fontFamily: "monospace" }}>From</label>
                                                    <input type="text"
                                                        style={{ fontSize: 14 }}
                                                        name="from"
                                                        className="form-control"
                                                        id="from"
                                                        placeholder="From"
                                                        onChange={handleChange}
                                                        value={user.from}
                                                        required
                                                    />
                                                </div>


                                                <div className='col'>
                                                    <label htmlfor="to" className="form-label" style={{ fontSize: 15, fontFamily: "monospace" }}>To</label>
                                                    <input type="text"
                                                        style={{ fontSize: 14 }}
                                                        name="to"
                                                        className="form-control"
                                                        id="to"
                                                        placeholder="To"
                                                        onChange={handleChange}
                                                        value={user.to}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <div className='row'>
                                                <div className='col'>
                                                    <label htmlfor="depaturetime" className="form-label" style={{ fontSize: 15, fontFamily: "monospace" }}>DepatureTime</label>
                                                    <input type="time"
                                                        style={{ fontSize: 14 }}
                                                        name="depaturetime"
                                                        className="form-control"
                                                        id="depaturetime"
                                                        placeholder="DepatureTime"
                                                        onChange={handleChange}
                                                        value={user.depaturetime}
                                                        required
                                                    />
                                                </div>

                                                <div className='col'>
                                                    <label htmlfor="arrivaltime" className="form-label" style={{ fontSize: 15, fontFamily: "monospace" }}>ArrivalTime</label>

                                                    <input type="time"
                                                        style={{ fontSize: 14 }}
                                                        name="arrivaltime"
                                                        className="form-control"
                                                        id="arrivaltime"
                                                        placeholder="ArrivalTime"
                                                        onChange={handleChange}
                                                        value={user.arrivaltime}
                                                        required

                                                    />
                                                </div>
                                            </div>

                                        </div>
                                        <div className="mb-4">
                                            <label htmlfor="price" className="form-label" style={{ fontSize: 15, fontFamily: "monospace" }}>Price</label>
                                            <input type="text"
                                                style={{ fontSize: 14 }}
                                                name="price"
                                                className="form-control"
                                                id="price"
                                                placeholder="Price in Rupees"
                                                onChange={handleChange}
                                                value={user.price}
                                                required
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <label htmlfor="routes" className="form-label" style={{ fontSize: 15, fontFamily: "monospace" }}>Routes</label>
                                            <input type="text"
                                                style={{ fontSize: 14 }}
                                                name="routes"
                                                className="form-control"
                                                id="routes"
                                                placeholder="Routes"
                                                onChange={handleChange}
                                                value={user.routes}
                                                required
                                            />
                                        </div>
                                        <button type="submit" className='btn btn-success btn-lg'>Add</button>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >


        </>

    )
}

export default Admin