import React from "react";
import './footer.css'
import Logo from '../Icons/logo-white.svg'

const footer = () => {
    return (
        <div className="footer-con">
            <div className="row-one">
                <div className="logo-title-con">
                    <div className="footer-logo">
                        <img src={Logo} alt=""></img>
                    </div>
                    <div className="footer-title">
                        <h1>Attack</h1>
                    </div>
                </div>
                <div className="footer-email-input">
                    <label for="email">Email</label>
                    <input type="text" id="email" name="email" placeholder="Email"></input>
                </div>
            </div>
            <div className="row-two"></div>
            <div className="row-three"></div>
        </div>
    )
}
export default footer