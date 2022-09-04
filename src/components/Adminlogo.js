import React from 'react'
import { Link } from 'react-router-dom'

function Adminlogo() {
    return (
        //Logo image
        <div>

            <nav className="navbar navbar-expand-md" style={{ float: "left" }}>
                <div className="container-fluid">
                    <Link to="/home">
                        <img src="https://i.ibb.co/cYxZhwF/logo.png" width="300" height="100" alt='' /></Link>


                </div>
            </nav>
        </div>
    )
}

export default Adminlogo