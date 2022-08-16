import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Adminnav from '../components/Adminnav';
import Api from '../Api';





// Edit FoodList function
function Update() {
    // state management
    const { id } = useParams();
    const [food, setFood] = useState(null);


    // edit food api call
    const editFood = async () => {
        try {
            const { data } = await axios.get(`https://trainexpress.herokuapp.com/train/find/${id}`);
            setFood(data);
        } catch (error) {
            console.log(error.message);
        }
    };

    // useEffect use refresh data
    useEffect(() => {
        editFood();
    });

    return (

        <div className="container">
            {food ? (
                <EditFoodForm food={food} />
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

// Edit Food list form function
export function EditFoodForm({ food }) {
    // navigate to page
    const navigate = useNavigate();

    // state management
    const [trainnumber, settrainnumber] = useState(food.trainnumber);
    const [trainname, settrainname] = useState(food.trainname);
    const [from, setfrom] = useState(food.from);
    const [arrivaltime, setarrivaltime] = useState(food.arrivaltime);
    const [to, setto] = useState(food.to);
    const [depaturetime, setdepaturetime] = useState(food.depaturetime);
    const [price, setprice] = useState(food.price);
    const [routes, setroutes] = useState(food.routes);

    // edit food update form and api call
    const editfood = () => {
        const updateFood = {
            trainnumber: trainnumber,
            trainname: trainname,
            from: from,
            arrivaltime: arrivaltime,
            to: to,
            depaturetime: depaturetime,
            price: price,
            routes: routes,
        };
        fetch(`https://trainexpress.herokuapp.com/train/${food._id}`, {
            method: "PUT",
            body: JSON.stringify(updateFood),
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
                                    <h2 style={{ color: "black", fontFamily: "timesnewroman" }}>TrainDetails</h2>
                                    <div className="mb-4">
                                        <div className='row'>
                                            <div className='col'>
                                                <label htmlfor="trainnumber" className="form-label" style={{ fontSize: 15, fontFamily: "monospace" }}>TrainNumber</label>
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
                                                <label htmlfor="trainnumber" className="form-label" style={{ fontSize: 15, fontFamily: "monospace" }}>TrainName</label>
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
                                                <label htmlfor="trainnumber" className="form-label" style={{ fontSize: 15, fontFamily: "monospace" }}>From</label>
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
                                                <label htmlfor="trainnumber" className="form-label" style={{ fontSize: 15, fontFamily: "monospace" }}>ArrivalTime</label>
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
                                                <label htmlfor="trainnumber" className="form-label" style={{ fontSize: 15, fontFamily: "monospace" }}>To</label>
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
                                                <label htmlfor="trainnumber" className="form-label" style={{ fontSize: 15, fontFamily: "monospace" }}>Depaturetime</label>
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
                                                <label htmlfor="trainnumber" className="form-label" style={{ fontSize: 15, fontFamily: "monospace" }}>Price</label>
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
                                                <label htmlfor="trainnumber" className="form-label" style={{ fontSize: 15, fontFamily: "monospace" }}>Routes</label>
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
                                            className="btn btn-primary btn-lg"
                                            onClick={editfood}
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
export default Update