import React from 'react'
import { toast } from "react-toastify";
import axios from "axios";
import Adminnav from '../components/Adminnav';
import Api from '../Api'
import { useNavigate } from 'react-router-dom';
function Admin() {
    const Aauth = window.localStorage.getItem('adminToken')
    const navigate = useNavigate()
    // form values
    const [train, setTrain] = React.useState({
        trainname: "",
        trainnumber: "",
        from: "",
        to: "",
        // depaturetime:"",
        // arrivaltime: "",
        time:"",
        date:"",
        routes: "",
        

    });

    const handleChange = ({ target: { name, value } }) => {
        setTrain({ ...train, [name]: value });
    };
    // posting train details

    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("https://trainexpress.herokuapp.com//train", train,
                {
                    headers: {
                        "Authorization": `Bearer ${Aauth}`
                    }
                });
            console.log(res);
            toast.success("Train Added Successfully", { autoClose: 2000 }, { position: toast.POSITION.TOP_RIGHT });
            navigate("/admintable")
        } catch (error) {
            console.log(error.message);
        }
    };



    return (
        // train details form
        <>
            <Adminnav />
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-3'> </div>
                    <div className='col-sm-6'>
                        <div className='card'>

                            <div className='card-body'>
                                <div className='card-title'>
                                    <h5 style={{ color: "black", fontFamily: "timesnewroman" }}>TrainDetails</h5>

                                    <form className="mt-4" onSubmit={handlesubmit} autoComplete="off">
                                        <div className="mb-4">
                                            <div className='row'>
                                                <div className='col'>
                                                    <b> <label htmlfor="trainnumber" className="form-label" style={{ fontSize: 15, fontFamily: "monospace" }}>TrainNumber</label></b>
                                                    <input type="number"
                                                        style={{ fontSize: 14 }}
                                                        name="trainnumber"
                                                        className="form-control"
                                                        id="trainnumber"
                                                        placeholder="TrainNumber"
                                                        onChange={handleChange}
                                                        value={train.trainnumber}
                                                        required
                                                    />
                                                </div>


                                                <div className='col'>
                                                    <b>  <label htmlfor="trainname" className="form-label" style={{ fontSize: 15, fontFamily: "monospace" }}>TrainName</label></b>
                                                    <input type="text"
                                                        style={{ fontSize: 14 }}
                                                        name="trainname"
                                                        className="form-control"
                                                        id="trainname"
                                                        placeholder="TrainName"
                                                        onChange={handleChange}
                                                        value={train.trainname}
                                                        required
                                                    />
                                                </div>

                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <div className='row'>
                                                <div className='col'>
                                                    <b>  <label htmlfor="from" className="form-label" style={{ fontSize: 15, fontFamily: "monospace" }}>From</label></b>
                                                    <input type="text"
                                                        style={{ fontSize: 14 }}
                                                        name="from"
                                                        className="form-control"
                                                        id="from"
                                                        placeholder="From"
                                                        onChange={handleChange}
                                                        value={train.from}
                                                        required
                                                    />
                                                </div>


                                                <div className='col'>
                                                    <b> <label htmlfor="to" className="form-label" style={{ fontSize: 15, fontFamily: "monospace" }}>To</label></b>
                                                    <input type="text"
                                                        style={{ fontSize: 14 }}
                                                        name="to"
                                                        className="form-control"
                                                        id="to"
                                                        placeholder="To"
                                                        onChange={handleChange}
                                                        value={train.to}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <div className='row'>
                                                <div className='col'>
                                                    <b> <label htmlfor="depaturetime" className="form-label" style={{ fontSize: 15, fontFamily: "monospace" }}>DepatureTime</label></b>
                                                    <input type="time"
                                                        style={{ fontSize: 14 }}
                                                        name="depaturetime"
                                                        className="form-control"
                                                        id="depaturetime"
                                                        placeholder="DepatureTime"
                                                        onChange={handleChange}
                                                        value={train.depaturetime}
                                                        required
                                                    />
                                                </div>

                                                <div className='col'>
                                                    <b>  <label htmlfor="arrivaltime" className="form-label" style={{ fontSize: 15, fontFamily: "monospace" }}>ArrivalTime</label></b>

                                                    <input type="time"
                                                        style={{ fontSize: 14 }}
                                                        name="arrivaltime"
                                                        className="form-control"
                                                        id="arrivaltime"
                                                        placeholder="ArrivalTime"
                                                        onChange={handleChange}
                                                        value={train.arrivaltime}
                                                        required

                                                    />
                                                </div>
                                            </div>

                                        </div>
                                        <div className="mb-4">
                                            <div className='row'>
                                                <div className='col'>
                                                    <b>  <label htmlfor="price" className="form-label" style={{ fontSize: 15, fontFamily: "monospace" }}>Price</label></b>
                                                    <input type="text"
                                                        style={{ fontSize: 14 }}
                                                        name="price"
                                                        className="form-control"
                                                        id="price"
                                                        placeholder="Price in Rupees"
                                                        onChange={handleChange}
                                                        value={train.price}
                                                        required
                                                    />
                                                </div>
                                                <div className='col'>
                                                    <b>  <label htmlfor="date" className="form-label" style={{ fontSize: 15, fontFamily: "monospace" }}>Date</label></b>
                                                    <input type="date"
                                                        style={{ fontSize: 14 }}
                                                        name="date"
                                                        className="form-control"
                                                        id="date"
                                                        placeholder="date in Rupees"
                                                        onChange={handleChange}
                                                        value={train.date}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <b> <label htmlfor="routes" className="form-label" style={{ fontSize: 15, fontFamily: "monospace" }}>Routes</label></b>
                                            <input type="text"
                                                style={{ fontSize: 14 }}
                                                name="routes"
                                                className="form-control"
                                                id="routes"
                                                placeholder="Routes"
                                                onChange={handleChange}
                                                value={train.routes}
                                                required
                                            />
                                        </div>
                                        <button type="submit" className='btn btn-success btn-md'>Add</button>

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