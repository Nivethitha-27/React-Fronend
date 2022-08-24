import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Adminnav from '../components/Adminnav';
import Api from '../Api';

// Edit TrainList function
function Trainupdate() {
    // state management
    const { id } = useParams();
    const [train, settrain] = useState(null);


    // edit train api call
    const edittrain= async () => {
        try {
            const { data } = await axios.get(`https://trainexpress.herokuapp.com/train/find/${id}`);
            settrain(data);
        } catch (error) {
            console.log(error.message);
        }
    };

    // useEffect use refresh data
    useEffect(() => {
        edittrain();
    });

    return (

        <div className="container">
            {train ? (
                <EdittrainForm train={train} />
            ) : (
                <div className="progress mt-3">
                    <div
                        className="progress-bar progress-bar-striped progress-bar-animated"
                        role="progressbar"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "75%" }}
                    ></div>
                </div>
            )}
        </div>
    );
}

// Edit train list form function
export function EdittrainForm({ train }) {
    // navigate to page
    const navigate = useNavigate();

    // state management
    const [trainnumber, settrainnumber] = useState(train.trainnumber);
    const [trainname, settrainname] = useState(train.trainname);
    const [from, setfrom] = useState(train.from);
    const [arrivaltime, setarrivaltime] = useState(train.arrivaltime);
    const [to, setto] = useState(train.to);
    const [depaturetime, setdepaturetime] = useState(train.depaturetime);
    const [price, setprice] = useState(train.price);
    const [routes, setroutes] = useState(train.routes);

    // edit train update form and api call
    const edittrain = () => {
        const updatetrain = {
            trainnumber: trainnumber,
            trainname: trainname,
            from: from,
            arrivaltime: arrivaltime,
            to: to,
            depaturetime: depaturetime,
            price: price,
            routes: routes,
        };
        fetch(`https://trainexpress.herokuapp.com/train/${train._id}`, {
            method: "PUT",
            body: JSON.stringify(updatetrain),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(() => navigate("/admintable"));
    };

    return (

        <>
            <Adminnav />
            <div className="container">
                <div className='container my-5'>
                    <div className='row'>
                        <div className='col-sm-3'> </div>
                        <div className='col-sm-6'>

                            <div className='card'>

                                <div className='card-body'>
                                    <div className='card-title'></div>
                                    <h5 style={{ color: "black", fontFamily: "timesnewroman" }}>TrainDetails</h5>
                                    <div className="mb-4">
                                        <div className='row'>
                                            <div className='col'>
                                              <b> <label htmlfor="trainnumber" className="form-label" style={{ fontSize: 15, fontFamily: "monospace" }}>TrainNumber</label></b>
                                                <input
                                                    style={{ fontSize: 14 }}
                                                    className="mt-2 form-control"
                                                    value={trainnumber}
                                                    type="number"
                                                    placeholder="trainnumber"
                                                    onChange={(event) => settrainnumber(event.target.value)}
                                                />
                                            </div>
                                            <div className='col'>
                                               <b> <label htmlfor="trainnumber" className="form-label" style={{ fontSize: 15, fontFamily: "monospace" }}>TrainName</label></b>
                                                {/* description */}
                                                <input
                                                    style={{ fontSize: 14 }}
                                                    className="mt-2 form-control"
                                                    value={trainname}
                                                    type="text"
                                                    placeholder="trainname"
                                                    onChange={(event) => settrainname(event.target.value)}
                                                />
                                            </div>
                                        </div>
                                        {/* price  */}
                                        <div className='row'>
                                            <div className='col'>
                                             <b> <label htmlfor="trainnumber" className="form-label" style={{ fontSize: 15, fontFamily: "monospace" }}>From</label></b>  
                                                <input
                                                    style={{ fontSize: 14 }}
                                                    className="mt-2 form-control"
                                                    value={from}
                                                    type="text"
                                                    placeholder="from"
                                                    onChange={(event) => setfrom(event.target.value)}
                                                />
                                            </div>
                                            {/* rating */}
                                            <div className='col'>
                                              <b> <label htmlfor="trainnumber" className="form-label" style={{ fontSize: 15, fontFamily: "monospace" }}>ArrivalTime</label></b> 
                                                <input
                                                    style={{ fontSize: 14 }}
                                                    className="mt-2 form-control"
                                                    value={arrivaltime}
                                                    type="time"
                                                    placeholder="Rating"
                                                    onChange={(event) => setarrivaltime(event.target.value)}
                                                />
                                            </div>
                                        </div>
                                        {/* offer */}
                                        <div className='row'>
                                            <div className='col'>
                                               <b> <label htmlfor="trainnumber" className="form-label" style={{ fontSize: 15, fontFamily: "monospace" }}>To</label></b>
                                                <input
                                                    style={{ fontSize: 14 }}
                                                    className="mt-2 form-control"
                                                    value={to}
                                                    type="text"
                                                    placeholder="To"
                                                    onChange={(event) => setto(event.target.value)}
                                                />
                                            </div>
                                            <div className='col'>
                                            <b> <label htmlfor="trainnumber" className="form-label" style={{ fontSize: 15, fontFamily: "monospace" }}>Depaturetime</label></b>
                                                <input
                                                    style={{ fontSize: 14 }}
                                                    className="mt-2 form-control"
                                                    value={depaturetime}
                                                    type="time"
                                                    placeholder="Depaturetime"
                                                    onChange={(event) => setdepaturetime(event.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col'>
                                            <b> <label htmlfor="trainnumber" className="form-label" style={{ fontSize: 15, fontFamily: "monospace" }}>Price</label></b>
                                                <input
                                                    style={{ fontSize: 14 }}
                                                    className="mt-2 form-control"
                                                    value={price}
                                                    type="number"
                                                    placeholder="price"
                                                    onChange={(event) => setprice(event.target.value)}
                                                />
                                            </div>
                                            <div className='col'>
                                            <b>  <label htmlfor="trainnumber" className="form-label" style={{ fontSize: 15, fontFamily: "monospace" }}>Routes</label></b>
                                                <input
                                                    style={{ fontSize: 14 }}
                                                    className="mt-2 form-control"
                                                    value={routes}
                                                    type="text"
                                                    placeholder="Routes"
                                                    onChange={(event) => setroutes(event.target.value)}
                                                />
                                            </div>
                                        </div><br></br>

                                        <button
                                            className="btn btn-primary btn-md"
                                            onClick={edittrain}
                                        >
                                            UPDATE
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
export default Trainupdate