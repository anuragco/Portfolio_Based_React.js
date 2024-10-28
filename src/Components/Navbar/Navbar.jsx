import React from "react";
import './Navbar.css'
import { Toggle } from "../Toggle/Toggle";
const Navbar = ()=>{
    return(
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Jeevan</div>
                <Toggle/>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <li>Home</li>
                        <li>Service</li>
                        <li>Experiance</li>
                        <li>Portfolio</li>
                        <li>Testimonials</li>
                    </ul>
                </div>
                <button className="button">Contact Us</button>
            </div>
        </div>
    )
}

export default Navbar