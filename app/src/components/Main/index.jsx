import React from "react";

import { Nav, Toast } from 'react-bootstrap';
import { Link } from "react-router-dom";

import './main.css'


const Main = () => {
    return (
        <div className="mainpage-container">
            <div className="main-login-successful-con">
                <h1>Welcome!</h1>
                <h3>you have been logged in successfully! &#x2705;</h3>
                <Nav.Link href='/Home'>
                    <button className="main-returnhome-btn">Return Home</button>
                </Nav.Link>
            </div>
        </div>
    )
}
export default Main