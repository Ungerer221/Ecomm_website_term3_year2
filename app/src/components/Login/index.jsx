import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./login.css"

const Login = () => {

    const [data, setData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // ! compare to version 3
            axios.post("http://localhost:5000/api/auth", data)
                .then((res) => {
                    // console.log(res.data.token)
                    localStorage.setItem("token", res.data.token);
                    window.location = "/";
                    // alert("logged in")
                })
                .catch((err) => {
                    console.log(err)
                    alert("no password or email found")
                })
            // localStorage.setItem("token", res.data);
            // window.location = "/";
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
                // alert("failed")
            }
        }
    };
    // todo above we need to alert the user that the entry has failed

    return (
        <div className="login-container">
            <div className="login-form-container">
                {/* left side | form*/}
                <div className="login-form-left-col">
                    <form className="login-form-input-con" onSubmit={handleSubmit} >
                        <h1>Login</h1>
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            onChange={handleChange}
                            value={data.email}
                            required
                            className="login-email-input"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                            value={data.password}
                            required
                            className="login-password-input"
                        />
                        {error && <div className="">{error}</div>}
                        <button type="submit" className="login-login-button">
                            login
                        </button>
                    </form>
                </div>
                {/* right side | page changer*/}
                <div className="login-form-right-col">
                    <h1>New? create and account here</h1>
                    {/* page changer  */}
                    <Link to="/Signup">
                        <button type="button" className="login-signup-button">
                            Sign Up
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Login;