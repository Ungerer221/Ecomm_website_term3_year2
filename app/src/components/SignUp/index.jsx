import { useState } from "react";
import Axios from "axios"
import { Link, useNavigate } from "react-router-dom"
// style sheet
import "./signUp.css"

// MUI IMPORTS 
import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Grid from '@mui/material/Grid';

const Signup = () => {
    // * must be that same as your payload for user.
    const [data, setData] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(data);
        try {
            //! check from version 3 
            // Axios.post("http://localhost:5000/api/users", data)
            //     .then((res) => {
            //         console.log(res);
            //     })
            //     .catch((err) => {
            //         console.log("there was an error:", err);
            //     })

            //!
            // * this is to add a new user when creating a profile
            Axios.post("http://localhost:5000/api/adduser", data)
                .then((res) => {
                    console.log(res)
                }).catch((err) => {
                    console.log("there was an error", err)
                })

            navigate("/login");
            // console.log(res.message);
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
            }
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-form-container">
                {/* left side  */}
                <div className="signup-form-left-col">
                    <h1>Already have an Account?</h1>
                    {/* back to login page  */}
                    <Link to="/Login">
                        <Button
                            variant="outlined"
                            sx={{ backgroundColor: "#fff", fontSize: "14px", fontWeight: "700" }}>
                            Login
                        </Button>
                    </Link>
                </div>
                {/* right side  */}
                <div className="signup-form-right-col">
                    {/* the form  */}
                    <form className="signup-form-input-con" onSubmit={handleSubmit}>
                        <h1>Create an Account</h1>
                        <input
                            type="text"
                            placeholder="First Name"
                            name="name"
                            //*same
                            onChange={handleChange}
                            value={data.name}
                            required
                            //! changed
                            className="signup-name-input"
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            name="username"
                            onChange={handleChange}
                            value={data.username}
                            required
                            className="signup-username-input"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            onChange={handleChange}
                            value={data.email}
                            required
                            className="sigup-email-input"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                            value={data.password}
                            required
                            className="signup-password-input"
                        />
                        {/* //todo check the error message styling */}
                        {error && <div className="error-msg">{error}</div>}
                        {/* // ? check if the submit works  */}
                        <button type="submit">
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup;