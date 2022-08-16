import React from 'react'
import { Link } from "react-router-dom"
import Adminlogo from '../components/Adminlogo'

function Adminlog() {
    
    return (
<>
<Adminlogo/>
        <div className='container my-5'>
            <div className='row'>
                <div className='col-sm-3'>
                </div>
                <div className='col-sm-6'>
                    <div className='card'>
                        <div className='card-body'>
                            <div className='card-title'>
                                <h2 style={{ color: "black", fontFamily: "timesnewroman" }}>Admin Login</h2>

                                <form className='mt-4'>
                                    <div class="form-group">
                                        <label for="email" class="form-label" style={{ fontSize: 15, fontFamily: "monospace" }}>Email</label>

                                        <input type="email"
                                            class="form-control"
                                            style={{ fontSize: 15 }}
                                            id="email"
                                            name="email"

                                            placeholder='Admin Email...'


                                        />
                                    </div>


                                    <label for="password" className="form-label" style={{ fontSize: 15, fontFamily: "monospace" }}>Password</label>
                                    <div class="form-group">
                                        <input type="password"
                                            class="form-control"
                                            style={{ fontSize: 14 }}
                                            name="password"
                                            id="password"
                                            placeholder='Admin Password...'
                                        />
                                    </div>

                                    <Link to="/admintable">
                                        <button type="submit" className='btn btn-success btn-lg'>Login</button>
                                    </Link>

                                </form>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>

        </>


    )
}

export default Adminlog