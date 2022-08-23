import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Usernav from '../components/Usernav';
import "./Services.css";

function Search() {

    const navigate = useNavigate();
    const { id } = useParams();
    const [api, setapi] = React.useState([]);
    const [list, setlist] = React.useState({
        trainname: "",
        from: "",
        to: ""

    });
    const [data, setData] = React.useState({
        from: "",
        to: ""
    });
    const handleChange = ({ target: { name, value } }) => {
        setData({ ...data, [name]: value });

    };


    // getting data

    useEffect(() => {
        fetch("https://trainexpress.herokuapp.com/train/find")
            .then((res) => res.json())
            .then((data) => {
                setapi(data);

                console.log(data);
            });
    }, []);


    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            const url = `https://trainexpress.herokuapp.com/train/find?from=${data.from}&to=${data.to}`;
            const res = await axios.get(url, data);
            setlist(res);

        } catch (error) {

        }
    };
    console.log(list.data);

    // get details


    return (
        <>
            <Usernav />
            <div className='container' >
                <div className='row'>
                    <div className='col-sm-3'> </div>
                    <div className='col-sm-6'>
                        <div className='card'>

                            <div className='card-body'>
                                <div className='card-title'>
                                    <h5 style={{ color: "black", fontFamily: "timesnewroman" }}>Choose Your Travel Place</h5>

                                    <form onSubmit={handlesubmit} autoComplete="off">
                                        <div className="mb-4">
                                            <div className='row'>

                                                <b> <label htmlfor="trainnumber" className="form-label" style={{ fontSize: 15, fontFamily: "monospace" }}>From</label></b>
                                                <select class="form-select"
                                                    id="from"
                                                    onChange={handleChange}
                                                    value={data.from}
                                                    name='from'>
                                                    <option selected>DestinationPlace</option>
                                                    <option value="madurai">madurai</option>
                                                    <option value="Mannargudi">Mannargudi</option>
                                                    <option value="ChennaiEgmore">ChennaiEgmore</option>
                                                    <option value="Sengottai">Sengottaii</option>
                                                    <option value="Chennai Egmore">Chennai Egmore</option>
                                                    <option value="Mgr Chennai Central">Mgr Chennai Central</option>
                                                    <option value="Thanjavur">Thanjavur</option>
                                                    <option value="Mayiladuturai">Mayiladuturai</option>
                                                </select>

                                                {/* <div className='row'>
                                                <div className='col'>
                                                <b> <label htmlfor="trainnumber" className="form-label" style={{ fontSize: 15, fontFamily: "monospace" }}>TrainNumber</label></b>
                                                    <input type="text"
                                                        style={{ fontSize: 14 }}
                                                        name="from"
                                                        className="form-control"
                                                        id="from"
                                                        placeholder="TrainNumber"
                                                        onChange={handleChange}
                                                        value={data.from}
                                                        required
                                                    />
                                                </div> */}

                                            </div>
                                            < div className='row'>

                                                <b> <label htmlfor="to"
                                                    className="form-label"
                                                    style={{ fontSize: 15, fontFamily: "monospace" }}>To</label></b>

                                                <select class="form-select"
                                                    id="to"
                                                    onChange={handleChange}
                                                    value={data.to}
                                                    name='to'>
                                                    <option selected>ArrivalPlace</option>
                                                    <option value="trichy">trichy</option>
                                                    <option value="Coimbatore">Coimbatore</option>
                                                    <option value="Kanyakumari">Kanyakumari</option>
                                                    <option value="Chennai Express">Chennai Express</option>
                                                    <option value="Chennai Egmore">Chennai Egmore</option>
                                                    <option value="Kanyakumari">Kanyakumari</option>
                                                    <option value="Coimbatore">Coimbatore</option>
                                                    <option value="ChennaiEgmore">ChennaiEgmore</option>
                                                    <option value="Coimbatore">Coimbatore</option>

                                                </select>
                                                {/* <div className='row'>
                                                <div className='col'>
                                                <b> <label htmlfor="trainnumber" className="form-label" style={{ fontSize: 15, fontFamily: "monospace" }}>TrainNumber</label></b>
                                                    <input type="text"
                                                        style={{ fontSize: 14 }}
                                                        name="to"
                                                        className="form-control"
                                                        id="to"
                                                        placeholder="TrainNumber"
                                                        onChange={handleChange}
                                                        value={data.to}
                                                        required
                                                    /> */}
                                                {/* </div> */}
                                                {/* </div> */}
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col'>
                                                <iconify-icon icon="arcticons:where-is-my-train" width="50"></iconify-icon></div>
                                            <div className='col'>
                                                <button className='btn btn-success btn-md' style={{ marginLeft: "-82%", marginTop: "3%" }} >Search</button></div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <table className="table" style={{ width: "50%", marginLeft: "25.5%" }}>
                    <thead >
                        <tr>
                            <th>TrainName</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Details</th>
                        </tr>
                    </thead>

                    <tbody className="bg-light">

                        {list.data && list.data.map((u, index) => {
                            return (

                                <tr key={index}>

                                    <td className="text-start">{u.trainname}</td>
                                    <td className="text-start">{u.from}</td>
                                    <td>{u.to}</td>
                                    <td>
                                        <Link to={`/traindata/${u._id}`}><button className='btn btn-success btn-sm'>Clickhere</button></Link>
                                       
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <br></br>

            </div>

        </>
    )
}

export default Search