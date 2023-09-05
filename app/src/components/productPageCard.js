import React from "react";
import './productPageCard.css'
import ImageAlt from '../Icons/imageAlt.svg'
import { Nav } from 'react-bootstrap';

import { BiCart } from "react-icons/bi";


// MUI
// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';




const ProductPageCard = (props) => {

    return (
        <div>
            <div className="productPageCard-con">
                {/* image  */}
                <div className="productPageCard-img">
                    <img src={ImageAlt} alt=""></img>
                </div>
                {/* text  */}
                <div className="productPageCard-content">
                    <div className="productPageCard-info">
                        <h1>{props.name}</h1>
                        <p>{props.type}</p>
                        <p>{props.description}</p>
                        <h2>R:{props.price}</h2>
                    </div>
                    <div className="productPageCard-buttons">
                        {/* <button>add to cart</button> */}
                        <Nav.Link href="/indipro" className="">
                            <Button variant="contained" sx={{padding:"10px 80px", borderRadius:"12px", backgroundColor:"#28A2D7"}}>View</Button>
                        </Nav.Link>
                        <Button  sx={{fontSize:"24px"}}><BiCart/></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductPageCard