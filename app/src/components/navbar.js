import React, { useState, useEffect } from 'react'
import Axios from 'axios'

import './navbar.css'
// import bootstrap from "bootstrap"
// import { star } from '../Icons/star.svg'
import { BiHeart, BiCart, BiSearch, BiUser } from "react-icons/bi";
import { Nav, Toast } from 'react-bootstrap';

import HeartIllOrange from '../Icons/heartIllOrange.svg'

// import Cart from '../pages/cart/cart.jsx'

// MUI 
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
// import { styled } from '@mui/material/styles';



//   export
const Navbar = () => {

    const [data, setData] = useState(null)

    useEffect(() => {
        Axios.get('http://localhost:5000/api/user/')
            .then((response) => {
                setData(response.data)
            }).catch((error) => {
                console.log(error)
            })
    }, [])

    console.log(data)

    if (!data) return null;

    return (
        <div className='header'>
            {/* navbar container */}
            <div className='nav-container'>
                {/* logo and title block  */}
                <div className="home-box">
                    <h1>Attack</h1>
                </div>
                {/* middle section  */}
                <div className="navbar_link">
                    <ul>
                        {/* <li>home</li> */}
                        <Nav.Link href='/'>home</Nav.Link>
                        <Nav.Link href='/product'>product</Nav.Link>
                        {/* dropdown  */}
                        <Nav.Link>
                            <button className="drop-down-btn"> Dropdown
                                <div className="drop-down-btn-content">
                                    <a href="">Age Calculator</a>
                                    <a href="/Checkout" className="drop-cart-link">
                                        <span>
                                            <BiCart />
                                            Cart
                                        </span>
                                    </a>
                                    <a href="" className="drop-special-link">
                                        <span>
                                            <BiHeart />
                                            Wish List
                                        </span>
                                    </a>
                                </div>
                            </button>
                        </Nav.Link>
                        {/* end dropdown  */}
                        <Nav.Link href="/Admin">
                            {/* // todo the admin button must show the users first two initials  */}
                            {/* <Button variant="contained">Admin</Button> */}
                        </Nav.Link>
                    </ul>
                </div>
                {/* right side button block  */}
                <div className="navbar-buttons">
                    <ul>
                        {/* wishlist dropdown  */}
                        <li>
                            <Tooltip title="Wishlist">
                                <button className="nav-wishlist-dropdown"> <BiHeart />
                                    <div className="nav-wishlist-dropdown-content">
                                        <h1>Items you've wishlisted will show here!</h1>
                                        <div className="nav-wishlist-dropdown-img">
                                            <img src={HeartIllOrange} alt=""></img>
                                            {/* <img src='' alt=""><HeartIll/></img> */}
                                            {/* <HeartIll /> */}
                                        </div>
                                        <button>View more</button>
                                    </div>
                                </button>
                            </Tooltip>
                        </li>
                        {/* // ! changed from checkout to Cart  */}
                        <Nav.Link href='/Checkout'>
                            <Tooltip title="Cart">
                                <li><BiCart /></li>
                            </Tooltip>
                        </Nav.Link>
                        <Tooltip title="Search">
                            <li><BiSearch /></li>
                        </Tooltip>
                        <Nav.Link href="/signUp">
                            <Tooltip title="Profile">
                                <div>
                                    <li><BiUser /></li>
                                    {/* try insert menu here otherwise do a dropdown method  */}
                                </div>
                            </Tooltip>
                        </Nav.Link>
                        {/* //todo need to find a way to get the first initila of the user name */}
                        <Avatar >{data.name}</Avatar>
                    </ul>
                </div>
            </div>
            {/* end of container */}
        </div>
    );
}
export default Navbar