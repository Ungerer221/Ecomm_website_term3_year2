import React from "react";

// css 
import './signUp.css'


function signUp() {
    return (
        <div className="signUp-page-container">
            <div className="signUp-con">
                {/* text container  */}
                <div className="signUp-heading-con">
                    <h1>sign up here</h1>
                    <p>Fill in the necessary information and complete the for to create an account</p>
                </div>
                {/* input container  */}
                <div className="signUp-input-con">
                    {/* first name  */}
                    <div className="first-name-con">
                        <label for='first-name'>first name</label>
                        <input type="text" name="first-name"></input>
                    </div>
                    {/* last name  */}
                    <div className="last-name-con">
                        <label for='last-name'>last name</label>
                        <input type="text" name="last-name"></input>
                    </div>
                    {/* email */}
                    <div className="email-con">
                        <label for='email'>email</label>
                        <input type="email" name="email"></input>
                    </div>
                    {/* create password */}
                    <div className="create-pass-con">
                        <label for='create-pass'>create password</label>
                        <input type="password" name="create-pass"></input>
                    </div>
                    {/* confirm password */}
                    <div className="confirm-pass-con">
                        <label for='confirm-pass'>confim password</label>
                        <input type="password" name="confirm-pass"></input>
                    </div>
                </div>
                {/* sign up button  */}
                <button className="signUp-btn">Sign Up</button>
            </div>
        </div>
    )
}
export default signUp